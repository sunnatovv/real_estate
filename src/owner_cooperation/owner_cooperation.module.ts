import { Module } from '@nestjs/common';
import { OwnerCooperationService } from './owner_cooperation.service';
import { OwnerCooperationController } from './owner_cooperation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerCooperationController],
  providers: [OwnerCooperationService],
})
export class OwnerCooperationModule {}
