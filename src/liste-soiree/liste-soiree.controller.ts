import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ListeSoireeService } from './liste-soiree.service';
import { CreateListeSoireeDto } from './dto/create-liste-soiree.dto';
import { UpdateListeSoireeDto } from './dto/update-liste-soiree.dto';

@Controller('liste-soiree')
export class ListeSoireeController {
  constructor(private readonly listeSoireeService: ListeSoireeService) {}

  @Post()
  create(@Body() createListeSoireeDto: CreateListeSoireeDto) {
    return this.listeSoireeService.create(createListeSoireeDto);
  }

  @Get()
  findAll() {
    return this.listeSoireeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listeSoireeService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateListeSoireeDto: UpdateListeSoireeDto,
  ) {
    return this.listeSoireeService.update(+id, updateListeSoireeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listeSoireeService.remove(+id);
  }
}
