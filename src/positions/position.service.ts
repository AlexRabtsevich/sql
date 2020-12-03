import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './costomer.entity';
import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustom(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { address, profile } = createCustomerDto;

    const user = new User();
    user.firstName = profile.firstName;
    user.lastName = profile.lastName;
    user.phone = profile.phone;
    user.age = profile.age;

    const customerAddress = new Address();
    customerAddress.city = address.city;
    customerAddress.country = address.country;
    customerAddress.house = address.house;
    customerAddress.street = address.street;

    const customer = new Customer();
    customer.profile = user;
    customer.address = customerAddress;

    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
