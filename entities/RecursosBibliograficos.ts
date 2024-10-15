import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ListaDeCompra } from "./ListaDeCompra";

@Entity("RecursosBibliograficos", { schema: "sql10732868" })
export class RecursosBibliograficos {
  @PrimaryGeneratedColumn({ name: "IdRecurso" })
  idRecurso: number;

  @Column("varchar", { name: "Titulo", length: 255 })
  titulo: string;

  @Column("varchar", { name: "Autor", length: 255 })
  autor: string;

  @Column("varchar", { name: "Editorial", length: 255 })
  editorial: string;

  @Column("int", { name: "AnoLanzamiento" })
  anoLanzamiento: number;

  @Column("tinyint", { name: "Estado", width: 1})
  estado: number;

  @OneToMany(() => ListaDeCompra, (listaDeCompra) => listaDeCompra.idRecurso2)
  listaDeCompras: ListaDeCompra[];
}
