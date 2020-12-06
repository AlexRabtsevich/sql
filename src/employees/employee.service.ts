import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { ProfileService } from '../profiles/profile.service';
import { AddressService } from '../address/address.service';
import { PositionService } from '../positions/position.service';
import { Position } from '../positions/position.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @Inject(ProfileService)
    private readonly userService: ProfileService,
    @Inject(AddressService)
    private readonly addressService: AddressService,
    @Inject(PositionService)
    private readonly positionService: PositionService,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const { positionId, address, profile } = createEmployeeDto;

    const employeeProfile = await this.userService.createUser(profile);
    const employeeAddress = await this.addressService.createAddress(address);

    const employeePosition = await this.positionRepository.findOne(positionId);

    const employee = new Employee();
    employee.position = employeePosition;
    employee.address = employeeAddress;
    employee.profile = employeeProfile;

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
