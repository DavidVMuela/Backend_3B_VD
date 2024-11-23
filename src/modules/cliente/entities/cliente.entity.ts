import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni:string;

    @Column()
    nombre_completo: string;

    @Column()
    telefono:string;

    
}
