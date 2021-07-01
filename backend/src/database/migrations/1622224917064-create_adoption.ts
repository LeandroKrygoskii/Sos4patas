import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAdoption1622224917064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable( new Table({
           name: 'adoption',
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
                   name: 'about',
                   type: 'text'
               },
               {
                   name: 'sexo',
                   type: 'varchar',              
               }
               ,{
                   name: 'porte',
                   type: 'varchar',
               }
           ],
       }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

       await queryRunner.dropTable('adoption');

    }

}
