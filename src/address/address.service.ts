import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Address } from './address.entity';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
    const { street, country, city, house } = createAddressDto;

    const address = new Address();
    address.country = country;
    address.city = city;
    address.street = street;
    address.house = house;

    return this.addressRepository.save(address);
  }
}
