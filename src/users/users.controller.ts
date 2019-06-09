import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { UserIdPipe } from './pipes/user-id.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new UserIdPipe()) id): Promise<User> {
    return await this.usersService.findOne(id)
  }

  @Post()
  async create() {
    return await this.usersService.create();
  }

  @Put()
  async edit() {
    return await this.usersService.edit();
  }

  @Delete()
  async remove() {
    return await this.usersService.remove();
  }
}
