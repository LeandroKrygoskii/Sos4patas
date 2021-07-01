import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class requestAdoption1624088169152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({

            name: 'request_adoption',
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
                   type: 'varchar',
               },
               {
                   name: 'email',
                   type: 'text'
               },
               {
                   name: 'telefone',
                   type: 'varchar'
               },
            ],

        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('request_adoption')
    }

}
