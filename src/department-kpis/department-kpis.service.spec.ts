import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentKpisService } from './department-kpis.service';

describe('DepartmentKpisService', () => {
  let service: DepartmentKpisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentKpisService],
    }).compile();

    service = module.get<DepartmentKpisService>(DepartmentKpisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
