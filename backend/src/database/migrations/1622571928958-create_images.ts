import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class createImages1622571928958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'images',
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
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'adoption_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [{
                name: 'ImageAdoption',
                columnNames: ['adoption_id'],
                referencedTableName: 'adoption',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('images');
    }

}
