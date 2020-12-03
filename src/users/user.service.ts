import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly customerRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const { phone, lastName, firstName, age } = createUserDto;

    const user = new User();
    user.age = age;
    user.phone = phone;
    user.lastName = lastName;
    user.firstName = firstName;

    return this.customerRepository.save(user);
  }
}
