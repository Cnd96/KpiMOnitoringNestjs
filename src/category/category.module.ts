import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity } from './category.entity';
import { KpiEntity } from '../kpi/kpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[ TypeOrmModule.forFeature([CategoryEntity,KpiEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports:[CategoryService]
})
export class CategoryModule {}
