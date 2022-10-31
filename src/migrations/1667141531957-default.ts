import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667141531957 implements MigrationInterface {
    name = 'default1667141531957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`description\``);
    }

}
