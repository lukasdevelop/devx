import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs'
import SendEmailConfirmationService  from './SendEmailConfirmationService'

interface IUser {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    confirmed?: boolean;
}
export class CreateUserService {

    private usersRepository: UsersRepositories;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepositories)
    }

    async execute({name, email, admin = false, password, confirmed = false} : IUser){

        if(!email) {
            throw new Error("Email incorrrect.")
        }
    
        const userAlreadyExists = await this.usersRepository.findOne({
            email
        })


        if(userAlreadyExists){
            throw new Error("User already exists.")
        }

        const passwordHash = await hash(password, 8)

        const user = this.usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
            confirmed
        })

        await this.usersRepository.save(user)

        SendEmailConfirmationService.user = user.id

        SendEmailConfirmationService.sendMail()

        return user;

    }
}