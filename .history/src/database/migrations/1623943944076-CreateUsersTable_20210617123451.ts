import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1623943944076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: '',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
