import { Response, Request } from 'express'

const users = [
    { name: 'Lucas', email: 'lucas@email.com'}
]

export class UserController  {
    async handle(request: Request, response: Response){
        return response.json(users)
    }
}