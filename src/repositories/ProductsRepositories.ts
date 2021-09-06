import {EntityRepository, Repository} from 'typeorm'
import {Product} from '../entities/Product'

@EntityRepository(Product)
export class ProductsRepositories extends Repository<Product>{}