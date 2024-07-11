import { UserSchema } from './user-model';

export type UserResponseSchema = Omit<UserSchema, 'password'>;
