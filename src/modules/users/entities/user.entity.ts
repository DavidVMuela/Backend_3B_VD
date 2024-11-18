import { Persona } from "src/modules/persona/entities/persona.entity";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    name:string;

    @Column()
    mail:string;

    @OneToOne(()=>Persona, persona=>persona.user,{cascade:true})
    persona:Persona;

}
