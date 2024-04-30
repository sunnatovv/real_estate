import { Module } from '@nestjs/common';
import { WindowSideService } from './window_side.service';
import { WindowSideController } from './window_side.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WindowSideController],
  providers: [WindowSideService],
})
export class WindowSideModule {}
