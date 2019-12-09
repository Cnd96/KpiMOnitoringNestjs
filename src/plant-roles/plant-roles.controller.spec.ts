import { Test, TestingModule } from '@nestjs/testing';
import { PlantRolesController } from './plant-roles.controller';

describe('PlantRoles Controller', () => {
  let controller: PlantRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantRolesController],
    }).compile();

    controller = module.get<PlantRolesController>(PlantRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
