import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProduct {
    id:string;
    name?: string;
    description?: string;
    price?: string;
}

export class UpdateProductService {

    private productsRepository: ProductsRepositories;

    constructor(){
        this.productsRepository = getCustomRepository(ProductsRepositories)
    }

    async execute({id, name, description, price}: IProduct){
        const product = await this.productsRepository.findOne(id)

        if(!product){
            throw new Error('Product dont exists.')
        }

       await this.productsRepository.update({id}, {
            name,
            description,
            price
        })

        const productUpdate = await this.productsRepository.findOne(id)

        

        return productUpdate
    }

}