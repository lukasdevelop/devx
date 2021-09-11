import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import jwt from 'jsonwebtoken'
import config from '../config'
interface IJwtPayload {
    sub: string;
}

export class ConfirmedUserService {

    private userRepository: UsersRepositories;

    constructor(){
        this.userRepository = getCustomRepository(UsersRepositories)
    }

    async execute(token: string){

        const { sub } = jwt.verify(token, config.secret) as IJwtPayload

        const id = sub

        await this.userRepository.update({id}, {
            confirmed: true
        })

        return {
            id: sub,
            message: "E-email confirmed."
        }
    }
}
