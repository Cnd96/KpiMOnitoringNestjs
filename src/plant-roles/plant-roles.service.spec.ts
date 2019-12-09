import { Test, TestingModule } from '@nestjs/testing';
import { PlantRolesService } from './plant-roles.service';

describe('PlantRolesService', () => {
  let service: PlantRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantRolesService],
    }).compile();

    service = module.get<PlantRolesService>(PlantRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
