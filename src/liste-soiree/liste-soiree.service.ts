import { Injectable } from '@nestjs/common';
import { CreateListeSoireeDto } from './dto/create-liste-soiree.dto';
import { UpdateListeSoireeDto } from './dto/update-liste-soiree.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listesoiree } from '../entities/Listesoiree';

@Injectable()
export class ListeSoireeService {
  constructor(
    @InjectRepository(Listesoiree)
    private listeSoireeRepository: Repository<Listesoiree>,
  ) {}

  create(createListeSoireeDto: CreateListeSoireeDto) {
    const listeSoiree = this.listeSoireeRepository.create(createListeSoireeDto);
    return {
      resultat: this.listeSoireeRepository.save(listeSoiree),
      message: 'ListeSoiree ajoutée avec succès',
    };
  }

  findAll() {
    return {
      resultat: this.listeSoireeRepository.find(),
      message: 'Liste des soirées récupérée avec succès',
    };
  }

  findOne(id: number) {
    return {
      resultat: this.listeSoireeRepository.findOneBy({ id }),
      message: `ListeSoiree #${id} récupérée avec succès`,
    };
  }

  update(id: number, updateListeSoireeDto: UpdateListeSoireeDto) {
    return {
      resultat: this.listeSoireeRepository.update(id, updateListeSoireeDto),
      message: 'ListeSoiree modifiée avec succès',
    };
  }

  remove(id: number) {
    return {
      resultat: this.listeSoireeRepository.delete(id),
      message: 'ListeSoiree supprimée avec succès',
    };
  }
}
