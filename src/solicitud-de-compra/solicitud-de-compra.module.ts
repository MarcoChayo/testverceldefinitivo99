import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudDeCompraController } from './solicitud-de-compra.controller';
import { SolicitudDeCompraService } from './solicitud-de-compra.service';
import { SolicitudDeCompra } from '../../entities/SolicitudDeCompra';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudDeCompra])],
  controllers: [SolicitudDeCompraController],
  providers: [SolicitudDeCompraService],
})
export class SolicitudDeCompraModule {}