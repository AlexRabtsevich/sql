import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PositionService } from './position.service';
import { Position } from './position.entity';
import { CreatePositionDto } from './dto/create-position.dto';

@Controller('positions')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() createPositionDto: CreatePositionDto): Promise<Position> {
    return this.positionService.createPosition(createPositionDto);
  }

  @Get()
  findAll(): Promise<Position[]> {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Position> {
    console.log(id);
    return this.positionService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.positionService.remove(id);
  }
}
