import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser21731696358472 implements MigrationInterface {
    name = 'ModificandoTableUser21731696358472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

}
