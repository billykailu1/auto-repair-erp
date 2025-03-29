// user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Create a new user
  async createUser(data) {
    return this.prisma.user.create({ data });
  }

  // Get all users
  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  // Get a user by id
  async getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Update user by id
  async updateUser(id: number, data) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Delete a user by id
  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
