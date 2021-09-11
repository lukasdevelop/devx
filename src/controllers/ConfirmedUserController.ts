import { Request, Response} from 'express'
import {ConfirmedUserService} from '../services/ConfirmedUserService'

class ConfirmedUserController {

    async handle(request: Request, response: Response){

        const { token } = request.params

        const confirmedUserService = new ConfirmedUserService()

        const result = await confirmedUserService.execute(token)

        return response.json(result)
    }
}

export default new ConfirmedUserController