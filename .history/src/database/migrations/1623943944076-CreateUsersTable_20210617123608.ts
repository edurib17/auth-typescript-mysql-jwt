import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1623943944076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" ')
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
