import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { UserResponseSchema } from './model/user-response';
import { UserSchema } from './model/user-model';

@Injectable()
export class UserService {
  inMemoryUsers: UserSchema[] = [];

  async create(body: UserDto): Promise<UserResponseSchema> {
    const user = {
      ...body,
      id: String(this.inMemoryUsers.length + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
      updatedBy: 'system',
    };
    this.inMemoryUsers.push(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      photo: user.photo,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      updatedBy: user.updatedBy,
    };
  }
}
