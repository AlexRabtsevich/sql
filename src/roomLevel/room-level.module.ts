import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoomLevelService } from './room-level.service';
import { RoomLevelController } from './room-level.controller';
import { RoomLevel } from './room-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomLevel])],
  providers: [RoomLevelService],
  controllers: [RoomLevelController],
})
export class RoomLevelModule {}
