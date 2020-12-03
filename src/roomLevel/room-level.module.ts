import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from './employee.entity';
import { RoomLevelService } from './room-level.service';
import { RoomLevelController } from './room-level.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [RoomLevelService],
  controllers: [RoomLevelController],
})
export class EmployeeModule {}
