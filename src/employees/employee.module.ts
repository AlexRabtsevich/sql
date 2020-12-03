import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class EmployeeModule {}
