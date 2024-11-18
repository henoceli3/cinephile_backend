import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Listesoiree } from './Listesoiree';
import { Utilisateur } from './Utilisateur';

@Index('commentaire_pkey', ['id'], { unique: true })
@Entity('commentaire', { schema: 'public' })
export class Commentaire {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('text', { name: 'contenu' })
  contenu: string;

  @Column('timestamp without time zone', {
    name: 'publication_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  publicationDate: Date | null;

  @ManyToOne(() => Listesoiree, (listesoiree) => listesoiree.commentaires)
  @JoinColumn([{ name: 'liste_id', referencedColumnName: 'id' }])
  liste: Listesoiree;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.commentaires)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Utilisateur;
}
