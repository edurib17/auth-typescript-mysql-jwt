import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1623943944076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp" ')
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'id',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
