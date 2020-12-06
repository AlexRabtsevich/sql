import { CreateManagerDto } from '../../profiles/dto/create-manager.dto';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateClientDto {
  address: CreateAddressDto;
  profile: CreateManagerDto;
  login: string;
  password: string;
}

export class QueriesClientDto {
  login: string;
  password: string;
}
