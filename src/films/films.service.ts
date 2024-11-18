import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../entities/Film';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  create(createFilmDto: CreateFilmDto) {
    return {
      resultat: this.filmRepository.save(createFilmDto),
      message: 'Film ajouté avec succès',
    };
  }

  async findAll() {
    const films = await this.filmRepository.find();
    return {
      resultat: films,
      message: 'Liste des films récupérée avec succès',
    };
  }

  async findOne(id: number) {
    const film = await this.filmRepository.findOne({ where: { id } });
    return {
      resultat: film,
      message: `Film #${id} récupéré avec succès`,
    };
  }

  async update(id: number, updateFilmDto: UpdateFilmDto) {
    await this.filmRepository.update(id, updateFilmDto);
    const updatedFilm = await this.filmRepository.findOne({ where: { id } });
    return {
      resultat: updatedFilm,
      message: `Film #${id} mis à jour avec succès`,
    };
  }

  async remove(id: number) {
    await this.filmRepository.delete(id);
    return {
      message: `Film #${id} supprimé avec succès`,
    };
  }
}
