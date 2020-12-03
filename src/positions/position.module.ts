import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
})
export class PositionModule {}
