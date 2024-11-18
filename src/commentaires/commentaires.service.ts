import { Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Commentaire } from '../entities/Commentaire';
import { Repository } from 'typeorm';

@Injectable()
export class CommentairesService {
  constructor(
    @InjectRepository(Commentaire)
    private commentaireRepository: Repository<Commentaire>,
  ) {}

  create(createCommentaireDto: CreateCommentaireDto) {
    const commentaire = this.commentaireRepository.create(createCommentaireDto);
    return {
      retusltat: this.commentaireRepository.save({
        ...commentaire,
        publicationDate: new Date(),
      }),
      message: 'Commentaire ajouté avec succès',
    };
  }

  findAll() {
    return {
      resultat: this.commentaireRepository.find(),
      message: 'Liste des comment',
    };
  }

  findOne(id: number) {
    return {
      resultat: this.commentaireRepository.findOneBy({ id }),
      message: 'Commentaire trouvé',
    };
  }

  update(id: number, updateCommentaireDto: UpdateCommentaireDto) {
    return {
      resultat: this.commentaireRepository.update(id, updateCommentaireDto),
      message: 'Commentaire modifié avec succès',
    };
  }

  remove(id: number) {
    return {
      resultat: this.commentaireRepository.delete(id),
      message: 'Commentaire supprimé avec succès',
    };
  }
}
