import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from '../entities/Utilisateur';
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
  ) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(
      createUtilisateurDto.password,
      salt,
    );
    return {
      resultat: await this.utilisateursRepository.save({
        ...createUtilisateurDto,
        password: hashedPassword,
      }),
      message: 'Utilisateur ajouté avec succès',
    };
  }

  async findAll() {
    const utilisateurs = await this.utilisateursRepository.find();
    return {
      resultat: utilisateurs,
      message: 'Liste des utilisateurs récupérée avec succès',
    };
  }

  async findOne(id: number) {
    const utilisateur = await this.utilisateursRepository.findOne({
      where: { id },
    });
    return {
      resultat: utilisateur,
      message: `Utilisateur #${id} récupéré avec succès`,
    };
  }

  async update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    if (updateUtilisateurDto.password) {
      const salt = await bcrypt.genSalt();
      updateUtilisateurDto.password = await bcrypt.hash(
        updateUtilisateurDto.password,
        salt,
      );
    }
    await this.utilisateursRepository.update(id, updateUtilisateurDto);
    const updatedUtilisateur = await this.utilisateursRepository.findOne({
      where: { id },
    });
    return {
      resultat: updatedUtilisateur,
      message: `Utilisateur #${id} mis à jour avec succès`,
    };
  }

  async remove(id: number) {
    await this.utilisateursRepository.delete(id);
    return {
      message: `Utilisateur #${id} supprimé avec succès`,
    };
  }
}
