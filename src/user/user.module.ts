// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import Prisma module to interact with the database
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
