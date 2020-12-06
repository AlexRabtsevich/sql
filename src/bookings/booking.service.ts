import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Booking } from './booking.entity';
import { CreateBookingDto, UpdateBookingDto } from './dto/create-booking.dto';
import { Room } from '../rooms/room.entity';
import { Manager } from '../managers/manager.entity';
import { Customer } from '../customer/customer.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Manager)
    private readonly managerRepository: Repository<Manager>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { clientId, customerId, roomId } = createBookingDto;
    const room = await this.roomRepository.findOne(roomId);
    await this.roomRepository.merge(room, { isBooked: true });

    const manager = await this.managerRepository.findOne(clientId);
    const customer = await this.customerRepository.findOne(customerId);

    const booking = new Booking();
    booking.room = room;
    booking.manager = manager;
    booking.customer = customer;

    return this.bookingRepository.save(booking);
  }

  async updateBooking(updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const { id } = updateBookingDto;
    const booking = await this.bookingRepository.findOne(id);
    const room = await this.roomRepository.findOne(booking.room.id);

    await this.roomRepository.merge(room, { isBooked: false });
    await this.bookingRepository.merge(booking, { checkOutDate: new Date() });

    return this.bookingRepository.save(booking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.bookingRepository.delete(id);
  }
}
