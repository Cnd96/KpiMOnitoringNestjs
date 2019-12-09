import { Test, TestingModule } from '@nestjs/testing';
import { UserDepartmentsController } from './user-departments.controller';

describe('UserDepartments Controller', () => {
  let controller: UserDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDepartmentsController],
    }).compile();

    controller = module.get<UserDepartmentsController>(UserDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
