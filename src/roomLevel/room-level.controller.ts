import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateRoomLevelDto } from './dto/create-room-level.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class RoomLevelController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createUserDto: CreateRoomLevelDto): Promise<Employee> {
    return this.employeeService.createEmployee(createUserDto);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.employeeService.remove(id);
  }
}
