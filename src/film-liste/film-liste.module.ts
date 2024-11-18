import { Module } from '@nestjs/common';
import { FilmListeService } from './film-liste.service';
import { FilmListeController } from './film-liste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filmliste } from '../entities/Filmliste';

@Module({
  imports: [TypeOrmModule.forFeature([Filmliste])],
  controllers: [FilmListeController],
  providers: [FilmListeService],
})
export class FilmListeModule {}
