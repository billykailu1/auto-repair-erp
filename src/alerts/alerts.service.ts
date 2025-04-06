import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  async createAlert(data) {
    return this.prisma.alert.create({ data });
  }

  async getAlerts() {
    return this.prisma.alert.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async deleteAlert(id: number) {
    return this.prisma.alert.delete({ where: { id } });
  }
}
