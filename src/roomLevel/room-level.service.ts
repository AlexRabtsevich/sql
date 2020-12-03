import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';
import { Employee } from './employee.entity';
import { CreateRoomLevelDto } from './dto/create-room-level.dto';
import { Position } from '../positions/position.entity';

@Injectable()
export class RoomLevelService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  createEmployee(createEmployeeDto: CreateRoomLevelDto): Promise<Employee> {
    const { position, profile, address } = createEmployeeDto;

    const employeeProfile = new User(profile);
    const employeeAddress = new Address(address);
    const employeePosition = new Position(position);

    const employee = new Employee(
      employeeProfile,
      employeeAddress,
      employeePosition,
    );

    return this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
