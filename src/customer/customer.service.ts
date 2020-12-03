import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UserService } from '../users/user.service';
import { AddressService } from '../address/address.service';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(AddressService)
    private readonly addressService: AddressService,
  ) {}

  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const { profile, address } = createCustomerDto;

    const customerProfile = await this.userService.createUser(profile);
    const customerAddress = await this.addressService.createAddress(address);

    const customer = new Customer();
    customer.profile = customerProfile;
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
