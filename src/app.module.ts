import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClusterModule } from './cluster/cluster.module';
import { PlantModule } from './plant/plant.module';
import { CategoryModule } from './category/category.module';
import { KpiModule } from './kpi/kpi.module';
import { MeasuringUnitModule } from './measuring-unit/measuring-unit.module';
import { PlantKpisModule } from './plant-kpis/plant-kpis.module';
import { PlantRolesModule } from './plant-roles/plant-roles.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentKpisModule } from './department-kpis/department-kpis.module';
import { DailyKpiRecordsModule } from './daily-kpi-records/daily-kpi-records.module';
import { UsersModule } from './users/users.module';
import { UserDepartmentsModule } from './user-departments/user-departments.module';
import { UserRolesModule } from './user-roles/user-roles.module';
import { KpiRecordAuditsModule } from './kpi-record-audits/kpi-record-audits.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './_shared/http-error-filter';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type":"postgres",
    "username": 'postgres',
    "host": 'localhost',
    "database": 'NestNcd',
    "password": 'chamal123',
    "port": 5432,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }),ClusterModule, PlantModule, CategoryModule, KpiModule, MeasuringUnitModule,
   PlantKpisModule, PlantRolesModule, RolesModule, DepartmentsModule, DepartmentKpisModule, 
   DailyKpiRecordsModule, UsersModule, UserDepartmentsModule, UserRolesModule, KpiRecordAuditsModule],
  controllers: [AppController],
  providers: [AppService,
    {
    provide:APP_FILTER,
    useClass:HttpErrorFilter
  }
],
})
export class AppModule {}
