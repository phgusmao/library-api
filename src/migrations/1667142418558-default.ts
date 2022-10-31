import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667142418558 implements MigrationInterface {
    name = 'default1667142418558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`publishing_company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book_publishing_company\` (\`book_id\` int NOT NULL, \`publishing_company_id\` int NOT NULL, INDEX \`IDX_70f99150aa089cd97631e27266\` (\`book_id\`), INDEX \`IDX_8007ce4c936c72b99375d63647\` (\`publishing_company_id\`), PRIMARY KEY (\`book_id\`, \`publishing_company_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`book_publishing_company\` ADD CONSTRAINT \`FK_70f99150aa089cd97631e27266d\` FOREIGN KEY (\`book_id\`) REFERENCES \`publishing_company\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`book_publishing_company\` ADD CONSTRAINT \`FK_8007ce4c936c72b99375d63647d\` FOREIGN KEY (\`publishing_company_id\`) REFERENCES \`books\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_publishing_company\` DROP FOREIGN KEY \`FK_8007ce4c936c72b99375d63647d\``);
        await queryRunner.query(`ALTER TABLE \`book_publishing_company\` DROP FOREIGN KEY \`FK_70f99150aa089cd97631e27266d\``);
        await queryRunner.query(`DROP INDEX \`IDX_8007ce4c936c72b99375d63647\` ON \`book_publishing_company\``);
        await queryRunner.query(`DROP INDEX \`IDX_70f99150aa089cd97631e27266\` ON \`book_publishing_company\``);
        await queryRunner.query(`DROP TABLE \`book_publishing_company\``);
        await queryRunner.query(`DROP TABLE \`publishing_company\``);
    }

}
