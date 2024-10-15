import { Controller, Get, Post, Body, Param, Patch, UseGuards, Request} from '@nestjs/common';
import { SolicitudDeCompraService } from './solicitud-de-compra.service';
import { SolicitudDeCompra } from '../../entities/SolicitudDeCompra';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateSolicitudDeCompraDto } from './dto/solicitud-de-compra.dto';
import { UpdateSolicitudDeCompraDto } from './dto/update-solicitud-de-compra.dto';

@ApiTags('Solicitudes de compra')
@ApiBearerAuth()
@Controller('solicitud-de-compra')
export class SolicitudDeCompraController {
  constructor(private readonly solicitudDeCompraService: SolicitudDeCompraService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async createSolicitud(
    @Body() solicitud: CreateSolicitudDeCompraDto,
    @Request() req: any
  ): Promise<SolicitudDeCompra> {
    const idUsuario = req.user.userId;
    const nuevaSolicitud = {
      ...solicitud,
      idUsuario: idUsuario,
      fechaCreacion: new Date(),
  };

    return this.solicitudDeCompraService.createSolicitud(nuevaSolicitud);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getSolicitudes(): Promise<SolicitudDeCompra[]> {
    return this.solicitudDeCompraService.getSolicitudes();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patchSolicitudDeCompra(
    @Param('id') id: number,
    @Body() updateDto: UpdateSolicitudDeCompraDto,
  ) {
    return this.solicitudDeCompraService.updateSolicitudDeCompra(id, updateDto);
  }
}

