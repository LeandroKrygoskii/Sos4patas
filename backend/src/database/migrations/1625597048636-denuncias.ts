import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class denuncias1625597048636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(new Table({
           name: 'denuncias',

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
                   name: 'title',
                   type: 'varchar',
               },
               {
                name: 'email',
                type: 'varchar',
               },
               {
                   name: 'about',
                   type: 'text'
               }
           ],
       }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('denuncias');
    }

}
