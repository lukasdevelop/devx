import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import config from '../config'



interface IAuthenticateUser {
    email: string;
    password: string;
}

export class AuthenticateUserService {
    async execute({email, password} : IAuthenticateUser){
        const userRepositories = getCustomRepository(UsersRepositories)

        const user = await userRepositories.findOne({
            email
        })


        if(!user){
            throw new Error("Email/Password incorrect.")
        }

                
        if(!user?.confirmed){
            throw new Error("Please confirm your email to login.")
        }


        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect.")
        }

        const token = sign({
            email: user.email
        },
        config.secret, {
            subject: user.id,
            expiresIn: "1d"
        })

        return token

    }
}