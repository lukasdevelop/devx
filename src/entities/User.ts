import { Exclude } from "class-transformer"
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'


@Entity("users")
export class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin:boolean;

    @Exclude()
    @Column()
    password: string;

    @Column()
    confirmed: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}