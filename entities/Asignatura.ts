import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Carrera } from "./Carrera";
import { ListaDeCompra } from "./ListaDeCompra";

@Index("IdCarrera", ["idCarrera"], {})
@Entity("Asignatura", { schema: "sql10732868" })
export class Asignatura {
  @Column("int", { primary: true, name: "IdAsignatura" })
  idAsignatura: number;

  @Column("int", { name: "CantidadAlumnos" })
  cantidadAlumnos: number;

  @Column("varchar", { name: "NombreAsignatura", length: 300 })
  NombreAsignatura: string;

  @Column("int", { name: "Codigo" })
  codigo: number;

  @Column("int", { name: "IdCarrera", nullable: true })
  idCarrera: number | null;

  @ManyToOne(() => Carrera, (carrera) => carrera.asignaturas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IdCarrera", referencedColumnName: "idCarrera" }])
  idCarrera2: Carrera;

  @OneToMany(
    () => ListaDeCompra,
    (listaDeCompra) => listaDeCompra.idAsignatura2
  )
  listaDeCompras: ListaDeCompra[];
}
