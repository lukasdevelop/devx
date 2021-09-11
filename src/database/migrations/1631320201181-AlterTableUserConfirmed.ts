import {MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableUserConfirmed1631320201181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "confirmed",
            type:"boolean",
            default: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("users", "confimed")
    }

}
