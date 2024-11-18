import { PartialType } from '@nestjs/mapped-types';
import { Film } from '../../entities/Film';

export class CreateFilmDto extends PartialType(Film) {}
