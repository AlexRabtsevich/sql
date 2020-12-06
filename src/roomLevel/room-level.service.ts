import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoomLevelDto } from './dto/create-room-level.dto';
import { RoomLevel } from './room-level.entity';

@Injectable()
export class RoomLevelService {
  constructor(
    @InjectRepository(RoomLevel)
    private readonly roomLevelRepository: Repository<RoomLevel>,
  ) {}

  createRoomLevel(createRoomLevelDto: CreateRoomLevelDto): Promise<RoomLevel> {
    const { price, name } = createRoomLevelDto;

    const roomLevel = new RoomLevel();
    roomLevel.price = price;
    roomLevel.name = name;

    return this.roomLevelRepository.save(roomLevel);
  }

  async findAll(): Promise<RoomLevel[]> {
    return this.roomLevelRepository.find();
  }

  findOne(id: string): Promise<RoomLevel> {
    return this.roomLevelRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.roomLevelRepository.delete(id);
  }
}
