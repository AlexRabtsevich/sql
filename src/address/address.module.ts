import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Address } from './address.entity';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressService],
  exports: [CreateAddressDto],
})
export class AddressModule {}
