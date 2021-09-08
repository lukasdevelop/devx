import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product";
import { v4 as uuid } from 'uuid'


@Entity("productimages")
export class ProductImages {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    product_id: string;

    @JoinColumn({ name: "product_id"})
    @ManyToOne(() => Product)
    productId: Product;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}