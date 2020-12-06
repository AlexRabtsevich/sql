import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Manager } from './manager.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { ProfileService } from '../profiles/profile.service';
import { AddressService } from '../address/address.service';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private readonly clientRepository: Repository<Manager>,
    @Inject(ProfileService)
    private readonly userService: ProfileService,
    @Inject(AddressService)
    private readonly addressService: AddressService,
  ) {}

  async createClient(createCustomerDto: CreateClientDto): Promise<Manager> {
    const { address, profile, login, password } = createCustomerDto;

    const clientProfile = await this.userService.createUser(profile);
    const clientAddress = await this.addressService.createAddress(address);

    const client = new Manager();
    client.address = clientAddress;
    client.profile = clientProfile;
    client.login = login;
    client.password = password;

    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Manager[]> {
    return this.clientRepository.find();
  }

  findOne(login: string, password: string): Promise<Manager> {
    return this.clientRepository.findOne({ login, password });
  }

  async remove(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
