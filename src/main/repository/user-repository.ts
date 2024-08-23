import { CreateUserDto } from '../user/dto/user-dto';
import { UserResponse } from '../user/model/user-response';

export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<UserResponse>;
  abstract findAll(): Promise<UserResponse[]>;
  abstract wipe(): Promise<void>;
}
