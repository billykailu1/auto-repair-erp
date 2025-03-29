// user.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create a new user
  @Post()
  create(@Body() data) {
    return this.userService.createUser(data);
  }

  // Get all users
  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  // Get one user by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  // Update user by id
  @Put(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.userService.updateUser(Number(id), data);
  }

  // Delete user by id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
