import { Response, Request } from 'express'
import { UpdateProductService } from '../services/UpdateProductService'

export class UpdateProductController {

    async handle(request: Request, response: Response){
        const { name, description, price} = request.body
        const { id } = request.params

        const updateProductService = new UpdateProductService()

        const product = await updateProductService.execute({id, name, description, price})

        return response.json(product)
    }
}