import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() data) {
    return this.appointmentsService.createAppointment(data);
  }

  @Get()
  findAll() {
    return this.appointmentsService.getAppointments();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.appointmentsService.updateAppointment(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.deleteAppointment(Number(id));
  }
}
