import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { UserService } from '../users/user.service';
import { AddressService } from '../address/address.service';
import { PositionService } from '../positions/position.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(AddressService)
    private readonly addressService: AddressService,
    @Inject(PositionService)
    private readonly positionService: PositionService,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const { position, address, profile } = createEmployeeDto;

    const employeeProfile = await this.userService.createUser(profile);
    const employeeAddress = await this.addressService.createAddress(address);
    const employeePosition = await this.positionService.createPosition(
      position,
    );

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
