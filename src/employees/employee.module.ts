import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from './employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Profile } from '../profiles/profile.entity';
import { Address } from '../address/address.entity';
import { AddressService } from '../address/address.service';
import { ProfileService } from '../profiles/profile.service';
import { PositionService } from '../positions/position.service';
import { Position } from '../positions/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Profile, Address, Position])],
  providers: [EmployeeService, AddressService, ProfileService, PositionService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
