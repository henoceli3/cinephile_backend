import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString, Length } from 'class-validator';
import { Commentaire } from '../../entities/Commentaire';

export class CreateCommentaireDto extends PartialType(Commentaire) {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 30)
  password: string;

  @IsString()
  contenu: string;
}
