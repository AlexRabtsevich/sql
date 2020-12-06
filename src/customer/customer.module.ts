import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from './customer.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { ProfileModule } from '../profiles/profile.module';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), ProfileModule, AddressModule],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
