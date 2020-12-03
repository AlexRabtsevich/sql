import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UserService } from '../users/user.service';
import { AddressService } from '../address/address.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(AddressService)
    private readonly addressService: AddressService,
  ) {}

  async createCustomer(createCustomerDto: CreateClientDto): Promise<Client> {
    const { address, profile, login, password } = createCustomerDto;

    const clientProfile = await this.userService.createUser(profile);
    const clientAddress = await this.addressService.createAddress(address);

    const client = new Client();
    client.address = clientAddress;
    client.profile = clientProfile;
    client.login = login;
    client.password = password;

    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: string): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
