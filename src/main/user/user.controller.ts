import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserResponse } from './model/user-response';
import { UserRepository } from '../repository/user-repository';
import { CreateUserDto } from './dto/user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<UserResponse> {
    return this.userRepository.create(body);
  }

  @Get()
  async list(): Promise<UserResponse[]> {
    return this.userRepository.findAll();
  }

  @Delete()
  async wipe(): Promise<void> {
    return this.userRepository.wipe();
  }
}
