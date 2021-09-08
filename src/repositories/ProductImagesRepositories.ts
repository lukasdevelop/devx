import { EntityRepository, Repository } from "typeorm";
import { ProductImages } from "../entities/ProductImages";


@EntityRepository(ProductImages)
export class ProductImagesRepositories extends Repository<ProductImages>{}