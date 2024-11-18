import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Commentaire } from './Commentaire';
import { Filmliste } from './Filmliste';
import { Utilisateur } from './Utilisateur';

@Index('listesoiree_pkey', ['id'], { unique: true })
@Entity('listesoiree', { schema: 'public' })
export class Listesoiree {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 150 })
  name: string;

  @Column('timestamp without time zone', {
    name: 'creation_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationDate: Date | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(() => Commentaire, (commentaire) => commentaire.liste)
  commentaires: Commentaire[];

  @OneToMany(() => Filmliste, (filmliste) => filmliste.liste)
  filmlistes: Filmliste[];

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.listesoirees)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Utilisateur;
}
