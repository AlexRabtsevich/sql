import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoomLevelDto } from './dto/create-room-level.dto';
import { RoomLevel } from './room-level.entity';

@Injectable()
export class RoomLevelService {
  constructor(
    @InjectRepository(RoomLevel)
    private readonly employeeRepository: Repository<RoomLevel>,
  ) {}

  createRoomLevel(createEmployeeDto: CreateRoomLevelDto): Promise<RoomLevel> {
    const { price, name } = createEmployeeDto;

    const roomLevel = new RoomLevel();
    roomLevel.price = price;
    roomLevel.name = name;

    return this.employeeRepository.save(roomLevel);
  }

  async findAll(): Promise<RoomLevel[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<RoomLevel> {
    return this.employeeRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
