import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() data) {
    return this.inventoryService.createItem(data);
  }

  @Get()
  findAll() {
    return this.inventoryService.getAllItems();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.getItemById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.inventoryService.updateItem(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.deleteItem(Number(id));
  }
}
