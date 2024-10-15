import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RecursosBibliograficos } from "./RecursosBibliograficos";
import { Asignatura } from "./Asignatura";
import { SolicitudDeCompra } from "./SolicitudDeCompra";

@Index("IdAsignatura", ["idAsignatura"], {})
@Index("IdSolicitud", ["idSolicitud"], {})
@Entity("ListaDeCompra", { schema: "sql10732868" })
export class ListaDeCompra {
  @Column("int", { name: "Cantidad" })
  cantidad: number;

  @Column("int", { primary: true, name: "IdRecurso" })
  idRecurso: number;

  @Column("int", { primary: true, name: "IdAsignatura" })
  idAsignatura: number;

  @Column("int", { primary: true, name: "IdSolicitud" })
  idSolicitud: number;

  @Column("varchar", { name: "Estado", length: 150})
  estado: string;

  @ManyToOne(
    () => RecursosBibliograficos,
    (recursosBibliograficos) => recursosBibliograficos.listaDeCompras,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "IdRecurso", referencedColumnName: "idRecurso" }])
  idRecurso2: RecursosBibliograficos;

  @ManyToOne(() => Asignatura, (asignatura) => asignatura.listaDeCompras, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IdAsignatura", referencedColumnName: "idAsignatura" }])
  idAsignatura2: Asignatura;

  @ManyToOne(
    () => SolicitudDeCompra,
    (solicitudDeCompra) => solicitudDeCompra.listaDeCompras,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "IdSolicitud", referencedColumnName: "idSolicitud" }])
  idSolicitud2: SolicitudDeCompra;
}
