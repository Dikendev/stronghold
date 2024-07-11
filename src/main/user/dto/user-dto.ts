import { UserSchema } from '../model/user-model';

export class UserDto implements UserDtoSchema {
  name: string;
  email: string;
  password: string;
  phone: string;
  photo: string;
  role: string;
}

export type UserDtoSchema = Omit<
  UserSchema,
  'id' | 'createdAt' | 'updatedAt' | 'updatedBy'
>;
