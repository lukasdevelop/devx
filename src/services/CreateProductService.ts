import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";


interface IProduct {
    name: string;
    description: string;
    price: string;
}

export class CreateProductService {
    private productsRepository: ProductsRepositories;

    constructor(){
        this.productsRepository = getCustomRepository(ProductsRepositories)
    }

    async execute({name, description, price}: IProduct){
        const product = this.productsRepository.create({
            name,
            description,
            price
        })

        await this.productsRepository.save(product)

        return product
    }
}