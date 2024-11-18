import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentairesModule } from './commentaires/commentaires.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule } from './films/films.module';
import { FilmListeModule } from './film-liste/film-liste.module';
import { ListeSoireeModule } from './liste-soiree/liste-soiree.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      port: Number(process.env.POSTGRES_PORT),
      entities: ['dist/entities/*{.ts,.js}'],
      synchronize: false,
    }),
    CommentairesModule,
    FilmsModule,
    FilmListeModule,
    ListeSoireeModule,
    UtilisateursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
