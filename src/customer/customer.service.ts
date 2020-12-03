import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClientDto } from './dto/create-client.dto';
import { Customer } from './customer.entity';
import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustomer(createCustomerDto: CreateClientDto): Promise<Customer> {
    const { profile } = createCustomerDto;

    const customerProfile = new User(profile);
    const customer = new Customer(customerProfile, customerAddress);

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
