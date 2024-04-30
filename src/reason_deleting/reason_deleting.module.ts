import { Module } from '@nestjs/common';
import { ReasonDeletingService } from './reason_deleting.service';
import { ReasonDeletingController } from './reason_deleting.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReasonDeletingController],
  providers: [ReasonDeletingService],
})
export class ReasonDeletingModule {}
