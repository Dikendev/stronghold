import { Module } from '@nestjs/common';
import { PrismaModule } from '../../external/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserPrismaService } from './user-prisma.service';
import { UserRepository } from '../repository/user-repository';

/**
 * @description This module is responsible for the user feature.
 * @summary Module responsible for the user feature.
 */
@Module({
  imports: [PrismaModule],
  providers: [
    UserPrismaService,
    { provide: UserRepository, useClass: UserPrismaService },
  ],
  controllers: [UserController],
  exports: [UserRepository],
})
export class UserModule {}
