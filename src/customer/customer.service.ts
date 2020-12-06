import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from './customer.entity';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from './dto/create-customer.dto';
import { ProfileService } from '../profiles/profile.service';
import { AddressService } from '../address/address.service';
import { Profile } from '../profiles/profile.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @Inject(ProfileService)
    private readonly userService: ProfileService,
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

  async updateCustomer(
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const { address, profile, id } = updateCustomerDto;

    const customer = await this.customerRepository.findOne(id);

    this.customerRepository.merge(customer, { address, profile });

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
