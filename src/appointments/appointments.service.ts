import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async createAppointment(data) {
    return await this.prisma.appointment.create({ data });
  }

  async getAppointments() {
    return await this.prisma.appointment.findMany();
  }

  async updateAppointment(id: number, data) {
    return await this.prisma.appointment.update({
      where: { id },
      data,
    });
  }

  async deleteAppointment(id: number) {
    return await this.prisma.appointment.delete({ where: { id } });
  }
}
