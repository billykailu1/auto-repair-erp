import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AlertsService } from './alerts.service';

@Controller('alerts') // ← THIS is what enables /alerts
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post()
  create(@Body() data) {
    return this.alertsService.createAlert(data);
  }

  @Get()
  findAll() {
    return this.alertsService.getAlerts();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertsService.deleteAlert(Number(id));
  }
}
