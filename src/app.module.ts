import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './main/house/house.module';
import { UserController } from './main/user/user.controller';
import { UserModule } from './main/user/user.module';
import { AppointmentModule } from './main/appointment/appointment.module';
import { ScheduleModule } from './main/schedule/schedule.module';
import { AppointmentController } from './main/appointment/appointment.controller';
import { HouseController } from './main/house/house.controller';
import { ScheduleController } from './main/schedule/schedule.controller';

@Module({
  imports: [AppointmentModule, HouseModule, ScheduleModule, UserModule],
  controllers: [
    AppController,
    AppointmentController,
    HouseController,
    ScheduleController,
    UserController,
  ],
  providers: [AppService],
})
export class AppModule {}
