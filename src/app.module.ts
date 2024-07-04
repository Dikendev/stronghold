import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './main/house/house.module';
import { UserController } from './main/user/user.controller';
import { UserModule } from './main/user/user.module';
import { AppointmentModule } from './main/appointment/appointment.module';

@Module({
  imports: [HouseModule, UserModule, AppointmentModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
