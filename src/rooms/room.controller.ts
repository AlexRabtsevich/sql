import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { Room } from './room.entity';
import { RoomService } from './room.service';
import {
  CreateRoomDto,
  FindRoomsDto,
  UpdateRoomDto,
} from './dto/create-room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomService.createRoom(createRoomDto);
  }

  @Put()
  update(@Body() updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomService.updateRoom(updateRoomDto);
  }

  @Get()
  findAll(@Query() queries: Partial<FindRoomsDto>): Promise<Room[]> {
    return this.roomService.findAll(queries);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Room> {
    return this.roomService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roomService.remove(id);
  }
}
