import { Test, TestingModule } from '@nestjs/testing';
import { ListeSoireeController } from './liste-soiree.controller';
import { ListeSoireeService } from './liste-soiree.service';

describe('ListeSoireeController', () => {
  let controller: ListeSoireeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListeSoireeController],
      providers: [ListeSoireeService],
    }).compile();

    controller = module.get<ListeSoireeController>(ListeSoireeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
