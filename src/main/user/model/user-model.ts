import { z } from 'zod';
import { ProfileSchema } from '../../profile/model/profile.model';
import { BookingSchema } from '../../schedule/model/booking-model';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  role: z.nativeEnum(Role),
  password: z.string(),
  updatedAt: z.date(),
  createdAt: z.date(),
  bookings: z.array(BookingSchema),
  profile: ProfileSchema,
});
