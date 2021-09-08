import {Request, Response} from 'express'
import { CreateProductImagesService } from '../services/CreateProductImagesService'

export class CreateProductImagesController {
    async handle(request: Request, response: Response){

        const { product_id } = request.body

        const name = request.file?.filename;

        const productImageService = new CreateProductImagesService()

        const image = await productImageService.execute({name, product_id})

        return response.json(image)

    }
}