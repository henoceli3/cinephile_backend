import { PartialType } from '@nestjs/mapped-types';
import { CreateListeSoireeDto } from './create-liste-soiree.dto';

export class UpdateListeSoireeDto extends PartialType(CreateListeSoireeDto) {}
