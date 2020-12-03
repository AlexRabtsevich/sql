import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Room } from './room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomLevel } from '../roomLevel/room-level.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(RoomLevel)
    private readonly roomLevelRepository: Repository<RoomLevel>,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const { number, levelId } = createRoomDto;
    const roomLevel = await this.roomLevelRepository.findOne(levelId);

    const room = new Room();
    room.level = roomLevel;
    room.number = number;

    return this.roomRepository.save(room);
  }

  async findAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  findOne(id: string): Promise<Room> {
    return this.roomRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
