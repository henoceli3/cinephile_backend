import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Filmliste } from "./Filmliste";

@Index("film_pkey", ["id"], { unique: true })
@Entity("film", { schema: "public" })
export class Film {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 200 })
  title: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("date", { name: "release_date", nullable: true })
  releaseDate: string | null;

  @OneToMany(() => Filmliste, (filmliste) => filmliste.film)
  filmlistes: Filmliste[];
}
