import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class user1624118934965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
               {
                   name: 'id',
                   type: 'integer',
                   unsigned: true,
                   isPrimary: true,
                   isGenerated: true,
                   generationStrategy: 'increment',
               },
               {
                   name: 'name',
                   type: 'text',
               },
               {
                   name: 'password',
                   type: 'text'
               },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
