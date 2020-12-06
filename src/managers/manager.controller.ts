import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { ManagerService } from './manager.service';
import { CreateClientDto, QueriesClientDto } from './dto/create-client.dto';
import { Manager } from './manager.entity';

@Controller('managers')
export class ManagerController {
  constructor(private readonly clientService: ManagerService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Manager> {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  findOne(@Query() queries: QueriesClientDto): Promise<Manager> {
    return this.clientService.findOne(queries.login, queries.password);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.clientService.remove(id);
  }
}
