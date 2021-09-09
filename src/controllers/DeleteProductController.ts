import { Response, Request } from 'express'
import { DeleteProductService } from "../services/DeleteProductService";

export class DeleteProductController {

    async handle(request: Request, response: Response, ) {
        const {id} = request.params

         const deleteProductService = new DeleteProductService()

         const product = await deleteProductService.execute(id)

        response.json({message: `${product.id} deleted with success.`})
    }
}