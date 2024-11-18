import { Module } from '@nestjs/common';
import { ListeSoireeService } from './liste-soiree.service';
import { ListeSoireeController } from './liste-soiree.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listesoiree } from '../entities/Listesoiree';

@Module({
  imports: [TypeOrmModule.forFeature([Listesoiree])],
  controllers: [ListeSoireeController],
  providers: [ListeSoireeService],
})
export class ListeSoireeModule {}
