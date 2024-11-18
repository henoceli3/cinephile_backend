import { PartialType } from '@nestjs/mapped-types';
import { Utilisateur } from '../../entities/Utilisateur';

export class CreateUtilisateurDto extends PartialType(Utilisateur) {}
