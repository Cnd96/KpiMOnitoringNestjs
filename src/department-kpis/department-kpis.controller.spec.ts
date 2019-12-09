import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentKpisController } from './department-kpis.controller';

describe('DepartmentKpis Controller', () => {
  let controller: DepartmentKpisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentKpisController],
    }).compile();

    controller = module.get<DepartmentKpisController>(DepartmentKpisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
