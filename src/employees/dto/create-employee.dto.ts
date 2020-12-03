import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreatePositionDto } from '../../positions/dto/create-position.dto';

export class CreateEmployeeDto {
  address: CreateAddressDto;
  profile: CreateUserDto;
  position: CreatePositionDto;
}
