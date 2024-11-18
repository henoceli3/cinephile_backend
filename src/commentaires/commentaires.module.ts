import { Module } from '@nestjs/common';
import { CommentairesService } from './commentaires.service';
import { CommentairesController } from './commentaires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commentaire } from '../entities/Commentaire';

@Module({
  imports: [TypeOrmModule.forFeature([Commentaire])],
  controllers: [CommentairesController],
  providers: [CommentairesService],
})
export class CommentairesModule {}
