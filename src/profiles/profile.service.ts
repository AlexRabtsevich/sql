import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Profile } from './profile.entity';
import { CreateManagerDto } from './dto/create-manager.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly userRepository: Repository<Profile>,
  ) {}

  async createUser(createUserDto: CreateManagerDto): Promise<Profile> {
    const { phone, lastName, firstName, age } = createUserDto;

    const user = new Profile();
    user.age = age;
    user.phone = phone;
    user.lastName = lastName;
    user.firstName = firstName;

    return await this.userRepository.save(user);
  }
}
