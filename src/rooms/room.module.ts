import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './room.entity';
import { RoomLevelService } from '../roomLevel/room-level.service';
import { RoomLevelModule } from '../roomLevel/room-level.module';
import { RoomLevel } from '../roomLevel/room-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room, RoomLevel]), RoomLevelModule],
  providers: [RoomService, RoomLevelService],
  controllers: [RoomController],
})
export class RoomModule {}
