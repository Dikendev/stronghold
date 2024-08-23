import { Injectable } from '@nestjs/common';
import { UserResponse } from './model/user-response';
import { PrismaService } from '../../external/prisma/prisma.service';
import { UserRepository } from '../repository/user-repository';
import { CreateUserDto } from './dto/user-dto';

@Injectable()
export class UserPrismaService implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(CreateUserDto: CreateUserDto): Promise<UserResponse> {
    return this.prisma.user.create({
      data: {
        email: CreateUserDto.email,
        password: CreateUserDto.password,
        role: CreateUserDto.role,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll(): Promise<UserResponse[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        bookings: true,
        profile: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async wipe(): Promise<void> {
    await this.prisma.user.deleteMany();
  }
}
