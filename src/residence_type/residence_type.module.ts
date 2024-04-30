import { Module } from '@nestjs/common';
import { ResidenceTypeService } from './residence_type.service';
import { ResidenceTypeController } from './residence_type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ResidenceTypeController],
  providers: [ResidenceTypeService],
})
export class ResidenceTypeModule {}
