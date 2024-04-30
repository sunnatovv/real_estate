import { Module } from '@nestjs/common';
import { ObjectCategoryService } from './object_category.service';
import { ObjectCategoryController } from './object_category.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ObjectCategoryController],
  providers: [ObjectCategoryService],
})
export class ObjectCategoryModule {}
