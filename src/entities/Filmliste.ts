import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Film } from './Film';
import { Listesoiree } from './Listesoiree';

@Index('filmliste_pkey', ['id'], { unique: true })
@Entity('filmliste', { schema: 'public' })
export class Filmliste {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordre', nullable: true })
  ordre: number | null;

  @ManyToOne(() => Film, (film) => film.filmlistes)
  @JoinColumn([{ name: 'film_id', referencedColumnName: 'id' }])
  film: Film;

  @ManyToOne(() => Listesoiree, (listesoiree) => listesoiree.filmlistes)
  @JoinColumn([{ name: 'liste_id', referencedColumnName: 'id' }])
  liste: Listesoiree;
}
