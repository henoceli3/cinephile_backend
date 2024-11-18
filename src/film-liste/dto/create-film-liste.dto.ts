import { OmitType } from '@nestjs/mapped-types';
import { Filmliste } from '../../entities/Filmliste';

export class CreateFilmListeDto extends OmitType(Filmliste, []) {}
