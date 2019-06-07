import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  @Get()
  async findAll(): Promise<User[]> {
    return [
      {
        id: 1,
        name: '小明',
        age: 18,
      },
    ];
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    return {
      id: params.id,
      name: '小明',
      age: 18
    }
  }

  @Post()
  async create() {

  }

  @Put()
  async edit() {

  }

  @Delete()
  async remove() {

  }
}
