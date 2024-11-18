import { PartialType } from '@nestjs/mapped-types';
import { Listesoiree } from '../../entities/Listesoiree';

export class CreateListeSoireeDto extends PartialType(Listesoiree) {}
