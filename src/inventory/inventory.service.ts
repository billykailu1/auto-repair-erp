import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async createItem(data) {
    return this.prisma.inventory.create({ data });
  }

  async getAllItems() {
    return this.prisma.inventory.findMany();
  }

  async getItemById(id: number) {
    return this.prisma.inventory.findUnique({ where: { id } });
  }

  async updateItem(id: number, data) {
    return this.prisma.inventory.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: number) {
    return this.prisma.inventory.delete({ where: { id } });
  }
}
