import { DataSource } from "typeorm"


export const databaseProvider=[
    {
        provide: 'DATABASE_CNNECTION',
        useFactory:()=>{
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