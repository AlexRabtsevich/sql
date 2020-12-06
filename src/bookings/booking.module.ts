import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.entity';
import { Room } from '../rooms/room.entity';
import { Manager } from '../managers/manager.entity';
import { Customer } from '../customer/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Room, Manager, Customer])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
