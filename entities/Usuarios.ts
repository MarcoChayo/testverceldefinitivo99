import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SolicitudDeCompra } from "./SolicitudDeCompra";

@Index("Email", ["email"], { unique: true })
@Entity("Usuarios", { schema: "sql10732868" })
export class Usuarios {
  @PrimaryGeneratedColumn({name: "IdUsuario" })
  idUsuario: number;

  @Column("varchar", { name: "Email", unique: true, length: 250 })
  email: string;

  @Column("varchar", { name: "Password", length: 100 })
  password: string;

  @OneToMany(
    () => SolicitudDeCompra,
    (solicitudDeCompra) => solicitudDeCompra.idUsuario2
  )
  solicitudDeCompras: SolicitudDeCompra[];
}
