import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePositionDto } from './dto/create-position.dto';
import { Position } from './position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
  ) {}

  createPosition(createPositionDto: CreatePositionDto): Promise<Position> {
    const position = new Position();
    position.name = createPositionDto.position;

    return this.positionRepository.save(position);
  }

  async findAll(): Promise<Position[]> {
    return this.positionRepository.find();
  }

  findOne(id: string): Promise<Position> {
    return this.positionRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.positionRepository.delete(id);
  }
}
