import { Test, TestingModule } from '@nestjs/testing';
import { ListeSoireeService } from './liste-soiree.service';

describe('ListeSoireeService', () => {
  let service: ListeSoireeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListeSoireeService],
    }).compile();

    service = module.get<ListeSoireeService>(ListeSoireeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
