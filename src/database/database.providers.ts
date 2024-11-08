import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm"


export const databaseProvider=[
    {
        provide: 'DATABASE_CNNECTION',
        inject: [ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource= new DataSource({
                type:'postgres',
                host:'localhost',
                port: 5432,
                username:'postgres',
                password: 'ZNM143064293',
                database:'back_nest_angular'
            });

            return dataSource.initialize();
        }
    }
]