import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmListeDto } from './create-film-liste.dto';

export class UpdateFilmListeDto extends PartialType(CreateFilmListeDto) {}
