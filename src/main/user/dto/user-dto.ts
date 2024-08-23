import { UserSchema } from '../model/user-model';
import { z } from 'zod';

export const CreateUserSchema = UserSchema.omit({
  id: true,
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
