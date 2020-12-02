import { CreateUserDto } from '../../users/dto/create-user.dto';

export class CreateCustomerDto extends CreateUserDto {
  address: string;
}
