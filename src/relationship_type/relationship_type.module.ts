import { Module } from '@nestjs/common';
import { RelationshipTypeService } from './relationship_type.service';
import { RelationshipTypeController } from './relationship_type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RelationshipTypeController],
  providers: [RelationshipTypeService],
})
export class RelationshipTypeModule {}
