import { Module } from '@nestjs/common';
import { ObjectStatusService } from './object_status.service';
import { ObjectStatusController } from './object_status.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ObjectStatusController],
  providers: [ObjectStatusService],
})
export class ObjectStatusModule {}
