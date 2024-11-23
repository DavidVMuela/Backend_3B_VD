import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRolUserTable1732316386688 implements MigrationInterface {
    name = 'CreateRolUserTable1732316386688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_551ede1f9ac73b4e8f18495c6d" UNIQUE ("userId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "mail" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precio" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_user" ("rolesId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_c9667a1fe5b74f7427a3ab50025" PRIMARY KEY ("rolesId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eb446d431a1abb9801e6ade445" ON "role_user" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2a23ceb75c7511d0523c4aaf49" ON "role_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_eb446d431a1abb9801e6ade4456" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492"`);
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_eb446d431a1abb9801e6ade4456"`);
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a23ceb75c7511d0523c4aaf49"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb446d431a1abb9801e6ade445"`);
        await queryRunner.query(`DROP TABLE "role_user"`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }

}
