import { Module } from '@nestjs/common';
import { RecursosBibliograficosService } from './recursos-bibliograficos.service';
import { RecursosBibliograficosController } from './recursos-bibliograficos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecursosBibliograficos } from '../../entities/RecursosBibliograficos';

@Module({
  imports: [TypeOrmModule.forFeature([RecursosBibliograficos])],
  providers: [RecursosBibliograficosService],
  controllers: [RecursosBibliograficosController],
})
export class RecursosBibliograficosModule {}
