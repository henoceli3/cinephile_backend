import { Injectable } from '@nestjs/common';
import { CreateFilmListeDto } from './dto/create-film-liste.dto';
import { UpdateFilmListeDto } from './dto/update-film-liste.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Filmliste } from '../entities/Filmliste';
import { Repository } from 'typeorm';

@Injectable()
export class FilmListeService {
  constructor(
    @InjectRepository(Filmliste)
    private filmListeRepository: Repository<Filmliste>,
  ) {}

  create(createFilmListeDto: CreateFilmListeDto) {
    const filmListe = this.filmListeRepository.create(createFilmListeDto);
    return {
      resultat: this.filmListeRepository.save(filmListe),
      message: 'FilmListe ajouté avec succès',
    };
  }

  findAll() {
    return {
      resultat: this.filmListeRepository.find(),
      message: 'Liste des films récupérée avec succès',
    };
  }

  findOne(id: number) {
    return {
      resultat: this.filmListeRepository.findOneBy({ id }),
      message: `FilmListe #${id} récupéré avec succès`,
    };
  }

  update(id: number, updateFilmListeDto: UpdateFilmListeDto) {
    return {
      resultat: this.filmListeRepository.update(id, updateFilmListeDto),
      message: 'FilmListe modifié avec succès',
    };
  }

  remove(id: number) {
    return {
      resultat: this.filmListeRepository.delete(id),
      message: 'FilmListe supprimé avec succès',
    };
  }
}
