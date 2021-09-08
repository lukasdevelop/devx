import { getCustomRepository } from "typeorm";
import { ProductImagesRepositories } from "../repositories/ProductImagesRepositories";

interface IProductImages {
    name?: string;
    product_id: string;
}

export class CreateProductImagesService {

    private productImagesRepository: ProductImagesRepositories;

    constructor(){
        this.productImagesRepository = getCustomRepository(ProductImagesRepositories)
    }

    async execute({name, product_id}: IProductImages){
        const image = this.productImagesRepository.create({
            name,
            product_id
        })

        await this.productImagesRepository.save(image)

        return image
    }
}