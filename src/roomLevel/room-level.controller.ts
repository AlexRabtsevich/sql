import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateRoomLevelDto } from './dto/create-room-level.dto';
import { RoomLevel } from './room-level.entity';
import { RoomLevelService } from './room-level.service';

@Controller('room-levels')
export class RoomLevelController {
  constructor(private readonly roomLevelService: RoomLevelService) {}

  @Post()
  create(@Body() createRoomLevelDto: CreateRoomLevelDto): Promise<RoomLevel> {
    return this.roomLevelService.createRoomLevel(createRoomLevelDto);
  }

  @Get()
  findAll(): Promise<RoomLevel[]> {
    return this.roomLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoomLevel> {
    return this.roomLevelService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roomLevelService.remove(id);
  }
}
