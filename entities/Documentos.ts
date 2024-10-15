import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SolicitudDeCompra } from "./SolicitudDeCompra";

@Index("IdSolicitud", ["idSolicitud"], {})
@Entity("Documentos", { schema: "sql10732868" })
export class Documentos {
  @PrimaryGeneratedColumn({ name: "IdDocumento" })
  idDocumento: number;

  @Column("text", { name: "Enlace"})
  enlace: string;

  @Column("int", { name: "Etapa" })
  etapa: number;

  @Column("int", { name: "IdSolicitud" })
  idSolicitud: number;

  @ManyToOne(
    () => SolicitudDeCompra,
    (solicitudDeCompra) => solicitudDeCompra.documentos,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "IdSolicitud", referencedColumnName: "idSolicitud" }])
  idSolicitud2: SolicitudDeCompra;
}
