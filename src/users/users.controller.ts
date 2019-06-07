import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
// import { IUserService } from './interfaces/user-service.interface';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService:UsersService) {}
  
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    return await this.usersService.findOne(params.id)
  }

  @Post()
  async create() {
    return await this.usersService.create()
  }

  @Put()
  async edit() {
    return await this.usersService.edit()
  }

  @Delete()
  async remove() {
    return await this.usersService.remove()
  }
  
}
