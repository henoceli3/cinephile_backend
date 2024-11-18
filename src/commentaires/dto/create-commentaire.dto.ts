import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Commentaire } from '../../entities/Commentaire';

export class CreateCommentaireDto extends PartialType(Commentaire) {
  @IsString()
  contenu: string;
}
