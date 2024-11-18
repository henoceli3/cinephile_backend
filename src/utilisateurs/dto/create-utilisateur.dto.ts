import { PartialType } from '@nestjs/mapped-types';
import { Utilisateur } from '../../entities/Utilisateur';
import { IsEmail, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateUtilisateurDto extends PartialType(Utilisateur) {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
