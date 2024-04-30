import { Module } from '@nestjs/common';
import { OwnershipService } from './ownership.service';
import { OwnershipController } from './ownership.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],  
  controllers: [OwnershipController],
  providers: [OwnershipService],
})
export class OwnershipModule {}
