import { CreateManagerDto } from '../../profiles/dto/create-manager.dto';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateCustomerDto {
  address: CreateAddressDto;
  profile: CreateManagerDto;
}

export class UpdateCustomerDto extends CreateCustomerDto {
  id: string;
}
