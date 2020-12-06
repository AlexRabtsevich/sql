import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { CreateManagerDto } from '../../profiles/dto/create-manager.dto';

export class CreateEmployeeDto {
  address: CreateAddressDto;
  profile: CreateManagerDto;
  positionId: string;
}
