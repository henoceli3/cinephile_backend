import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmListeService } from './film-liste.service';
import { CreateFilmListeDto } from './dto/create-film-liste.dto';
import { UpdateFilmListeDto } from './dto/update-film-liste.dto';

@Controller('film-liste')
export class FilmListeController {
  constructor(private readonly filmListeService: FilmListeService) {}

  @Post()
  create(@Body() createFilmListeDto: CreateFilmListeDto) {
    return this.filmListeService.create(createFilmListeDto);
  }

  @Get()
  findAll() {
    return this.filmListeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmListeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmListeDto: UpdateFilmListeDto) {
    return this.filmListeService.update(+id, updateFilmListeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmListeService.remove(+id);
  }
}
