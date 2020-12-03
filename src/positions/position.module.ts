import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Position } from './position.entity';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { CreatePositionDto } from './dto/create-position.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionService],
  controllers: [PositionController],
  exports: [CreatePositionDto],
})
export class PositionModule {}
