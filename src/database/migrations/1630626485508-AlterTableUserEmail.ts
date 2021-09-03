import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableUserEmail1630626485508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "email",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "email")
    }

}
