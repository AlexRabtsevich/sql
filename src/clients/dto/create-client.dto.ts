import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateClientDto {
  address: CreateAddressDto;
  profile: CreateUserDto;
  login: string;
  password: string;
}
