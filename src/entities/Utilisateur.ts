import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Commentaire } from "./Commentaire";
import { Listesoiree } from "./Listesoiree";

@Index("utilisateur_email_key", ["email"], { unique: true })
@Index("utilisateur_pkey", ["id"], { unique: true })
@Entity("utilisateur", { schema: "public" })
export class Utilisateur {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @OneToMany(() => Commentaire, (commentaire) => commentaire.user)
  commentaires: Commentaire[];

  @OneToMany(() => Listesoiree, (listesoiree) => listesoiree.user)
  listesoirees: Listesoiree[];
}
