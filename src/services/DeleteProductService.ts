import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";


export class DeleteProductService {

    private productRepository: ProductsRepositories;
    
    constructor(){
        this.productRepository = getCustomRepository(ProductsRepositories)
    }

    async execute(id: string){
        const product = await this.productRepository.findOne({id})

        if(!product){
            throw new Error("Product not exists.")
        }

        await this.productRepository.delete({id})

        return product
    }
}