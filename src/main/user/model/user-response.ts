import { z } from 'zod';
import { UserSchema } from './user-model';

export type UserResponse = z.infer<typeof UserSchema>;
