import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './client.entity';
import { User } from '../users/user.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { address, profile } = createCustomerDto;

    const customerProfile = new User(profile);
    const customerAddress = new Address(address);
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
