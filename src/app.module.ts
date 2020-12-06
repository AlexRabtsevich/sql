import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profiles/profile.module';
import { CustomerModule } from './customer/customer.module';
import { RoomModule } from './rooms/room.module';
import { ManagerModule } from './managers/manager.module';
import { AddressModule } from './address/address.module';
import { RoomLevelModule } from './roomLevel/room-level.module';
import { PositionModule } from './positions/position.module';
import { EmployeeModule } from './employees/employee.module';
import { BookingModule } from './bookings/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProfileModule,
    CustomerModule,
    RoomModule,
    ManagerModule,
    AddressModule,
    RoomLevelModule,
    PositionModule,
    EmployeeModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
