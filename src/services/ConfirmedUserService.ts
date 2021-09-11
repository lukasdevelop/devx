import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import jwt from 'jsonwebtoken'

interface IJwtPayload {
    sub: string;
}

export class ConfirmedUserService {

    private userRepository: UsersRepositories;

    constructor(){
        this.userRepository = getCustomRepository(UsersRepositories)
    }

    async execute(token: string){

        const { sub } = jwt.verify(token, "9aaf65aa4740576769dd8e28ef721b09") as IJwtPayload

        const id = sub

        await this.userRepository.update({id}, {
            confirmed: true
        })

        return sub
    }
}
