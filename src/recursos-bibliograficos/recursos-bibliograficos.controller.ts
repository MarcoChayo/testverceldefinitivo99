import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RecursosBibliograficosService } from './recursos-bibliograficos.service';
import { RecursosBibliograficos } from '../../entities/RecursosBibliograficos';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { deleteRecursosDto } from './dto/deleteRecursos.dto';
import { RecursosDto } from './dto/recursos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Solicitudes de registros biliograficos')
@ApiBearerAuth()
@Controller('recursos')
export class RecursosBibliograficosController {
    constructor(private readonly RecursosBiliograficosService: RecursosBibliograficosService) {}
    @UseGuards(JwtAuthGuard)
    @Get()
    async getRecursos(): Promise<RecursosBibliograficos[]> {
        return this.RecursosBiliograficosService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Delete()
        async borrarRecurso(@Body() recursosDto: deleteRecursosDto) {
    return this.RecursosBiliograficosService.deleteRecursos(recursosDto.idRecurso);
    }
    @UseGuards(JwtAuthGuard)
    @Post()
        async crearRecurso(@Body() recursosDto: RecursosDto) {
    return this.RecursosBiliograficosService.crearRecurso(recursosDto);
    }

}
