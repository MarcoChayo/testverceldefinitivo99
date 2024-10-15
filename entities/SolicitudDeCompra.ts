import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Documentos } from "./Documentos";
import { ListaDeCompra } from "./ListaDeCompra";
import { Usuarios } from "./Usuarios";

@Index("IdUsuario", ["idUsuario"], {})
@Entity("SolicitudDeCompra", { schema: "sql10732868" })
export class SolicitudDeCompra {
  @PrimaryGeneratedColumn( {name: "IdSolicitud" })
  idSolicitud: number;

  @Column("varchar", { name: "TipoDeCompra", length: 20 })
  tipoDeCompra: string;

  @Column("varchar", { name: "Estado", length: 150})
  estado: string;

  @Column("date", { name: "FechaCreacion" })
  fechaCreacion: Date;

  @Column("date", { name: "FechaCierre", nullable: true })
  fechaCierre: Date | null;

  @Column("int", { name: "IdUsuario" })
  idUsuario: number;

  @OneToMany(() => Documentos, (documentos) => documentos.idSolicitud2)
  documentos: Documentos[];

  @OneToMany(() => ListaDeCompra, (listaDeCompra) => listaDeCompra.idSolicitud2)
  listaDeCompras: ListaDeCompra[];

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.solicitudDeCompras, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IdUsuario", referencedColumnName: "idUsuario" }])
  idUsuario2: Usuarios;
}
