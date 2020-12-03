import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateClientDto } from './dto/create-client.dto';
import { ClientService } from './client.service';
import { Customer } from './client.entity';

@Controller('customers')
export class ClientController {
  constructor(private readonly customerService: ClientService) {}

  @Post()
  create(@Body() createUserDto: CreateClientDto): Promise<Customer> {
    return this.customerService.createCustomer(createUserDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customerService.remove(id);
  }
}
