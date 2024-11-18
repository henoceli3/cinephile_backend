import { Test, TestingModule } from '@nestjs/testing';
import { FilmListeService } from './film-liste.service';

describe('FilmListeService', () => {
  let service: FilmListeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmListeService],
    }).compile();

    service = module.get<FilmListeService>(FilmListeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
