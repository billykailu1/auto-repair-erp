import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { InventoryModule } from './inventory/inventory.module'; // 🆕
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module'; // Import the UserModule
import {AlertsModule} from './alerts/alerts.module'; // Import the Alerts module

@Module({
  imports: [AppointmentsModule, InventoryModule, PrismaModule, UserModule, AlertsModule], // 🆕 add InventoryModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
