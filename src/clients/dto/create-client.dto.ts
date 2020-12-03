import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateCustomerDto {
  address: CreateAddressDto;
  profile: CreateUserDto;
}
