import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667141318895 implements MigrationInterface {
    name = 'default1667141318895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`books\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NOT NULL, \`book_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`genders\` ADD CONSTRAINT \`FK_f6b435f2af8c4ec1fcfa84d9141\` FOREIGN KEY (\`book_id\`) REFERENCES \`books\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`genders\` DROP FOREIGN KEY \`FK_f6b435f2af8c4ec1fcfa84d9141\``);
        await queryRunner.query(`DROP TABLE \`genders\``);
        await queryRunner.query(`DROP TABLE \`books\``);
    }

}
