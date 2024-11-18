import { Test, TestingModule } from '@nestjs/testing';
import { FilmListeController } from './film-liste.controller';
import { FilmListeService } from './film-liste.service';

describe('FilmListeController', () => {
  let controller: FilmListeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmListeController],
      providers: [FilmListeService],
    }).compile();

    controller = module.get<FilmListeController>(FilmListeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
