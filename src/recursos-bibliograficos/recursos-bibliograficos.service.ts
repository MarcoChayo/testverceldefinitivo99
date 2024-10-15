import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecursosBibliograficos } from '../../entities/RecursosBibliograficos';
import { Repository } from 'typeorm';
import { RecursosDto } from './dto/recursos.dto';

@Injectable()
export class RecursosBibliograficosService {
    constructor(
        @InjectRepository(RecursosBibliograficos)
        private readonly RecursosBibliograficosRepo: Repository <RecursosBibliograficos>
    ) {}

    async findAll(): Promise<RecursosBibliograficos[]> {
        return this.RecursosBibliograficosRepo.find();
    }

    async deleteRecursos(idRecurso: number): Promise<void> {
        const recurso = await this.RecursosBibliograficosRepo.findOneBy({ idRecurso });
      
        if (!recurso) {
          throw new NotFoundException(`Recurso con id ${idRecurso} no encontrado`);
        }
      
        await this.RecursosBibliograficosRepo.remove(recurso);
      }

    async crearRecurso(recursosDto: RecursosDto): Promise<RecursosBibliograficos> {
        const nuevoRecurso = this.RecursosBibliograficosRepo.create(recursosDto);
        return this.RecursosBibliograficosRepo.save(nuevoRecurso);
    }
}
