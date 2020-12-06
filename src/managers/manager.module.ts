import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Manager } from './manager.entity';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { ProfileModule } from '../profiles/profile.module';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([Manager]), ProfileModule, AddressModule],
  providers: [ManagerService],
  controllers: [ManagerController],
})
export class ManagerModule {}
