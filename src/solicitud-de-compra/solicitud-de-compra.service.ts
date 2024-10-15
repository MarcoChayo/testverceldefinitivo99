import { NotFoundException} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { SolicitudDeCompra } from '../../entities/SolicitudDeCompra';
import { UpdateSolicitudDeCompraDto } from './dto/update-solicitud-de-compra.dto';

@Injectable()
export class SolicitudDeCompraService {
  constructor(
    @InjectRepository(SolicitudDeCompra)
    private readonly solicitudDeCompraRepository: Repository<SolicitudDeCompra>,
  ) {}

  async createSolicitud(solicitudData: Partial<SolicitudDeCompra>): Promise<SolicitudDeCompra> {
    const nuevaSolicitud = this.solicitudDeCompraRepository.create(solicitudData);
    return this.solicitudDeCompraRepository.save(nuevaSolicitud);
  }

  async getSolicitudes(): Promise<SolicitudDeCompra[]> {
    return this.solicitudDeCompraRepository.find({
      where: {
        estado: Not('eliminada'),
      },
    });
  }

  async updateSolicitudDeCompra(id: number, updateDto: UpdateSolicitudDeCompraDto) {

    const solicitud = await this.solicitudDeCompraRepository.findOne({ where: { idSolicitud: id } });

    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }

    if (updateDto.estado && updateDto.estado.toLowerCase() === 'eliminada') {
      solicitud.estado = 'eliminada';
    } else {
      solicitud.tipoDeCompra = updateDto.tipoDeCompra ?? solicitud.tipoDeCompra;
      solicitud.estado = updateDto.estado ?? solicitud.estado;
    }

    await this.solicitudDeCompraRepository.save(solicitud);
  }
}
