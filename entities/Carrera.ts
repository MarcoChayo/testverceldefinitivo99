import { Column, Entity, OneToMany } from "typeorm";
import { Asignatura } from "./Asignatura";

@Entity("Carrera", { schema: "sql10732868" })
export class Carrera {
  @Column("int", { primary: true, name: "IdCarrera" })
  idCarrera: number;

  @Column("varchar", { name: "NombreCarrera", length: 400 })
  NombreCarrera: string;

  @Column("int", { name: "Codigo" })
  codigo: number;

  @Column("varchar", { name: "Sede", length: 255 })
  sede: string;

  @OneToMany(() => Asignatura, (asignatura) => asignatura.idCarrera2)
  asignaturas: Asignatura[];
}
