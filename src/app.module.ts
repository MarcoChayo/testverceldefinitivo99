import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Asignatura } from '../entities/Asignatura'; 
import { Carrera } from '../entities/Carrera';
import { Documentos } from '../entities/Documentos';
import { ListaDeCompra } from '../entities/ListaDeCompra';
import { RecursosBibliograficos } from '../entities/RecursosBibliograficos';
import { SolicitudDeCompra } from '../entities/SolicitudDeCompra';
import { Usuarios } from '../entities/Usuarios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SolicitudDeCompraModule } from './solicitud-de-compra/solicitud-de-compra.module';
import { RecursosBibliograficosModule } from './recursos-bibliograficos/recursos-bibliograficos.module';
@Module({
  imports: [ TypeOrmModule.forRoot({

    "name": "default",
    "type": "mysql",
    "host": "sql10.freemysqlhosting.net",
    "port": 3306,
    "username": "sql10737982",
    "password": "vGjUBgnNvw",
    "database": "sql10737982",
    "synchronize": true,
    "entities": [Asignatura, Carrera, Documentos, ListaDeCompra, RecursosBibliograficos, SolicitudDeCompra, Usuarios]
}), 
AuthModule, SolicitudDeCompraModule, RecursosBibliograficosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
