import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ObjectTypeModule } from './object_type/object_type.module';
import { ResidenceTypeModule } from './residence_type/residence_type.module';
import { ObjectCategoryModule } from './object_category/object_category.module';
import { ObjectStatusModule } from './object_status/object_status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenovationModule } from './renovation/renovation.module';
import { WindowSideModule } from './window_side/window_side.module';
import { RoomTypeModule } from './room_type/room_type.module';
import { OwnershipModule } from './ownership/ownership.module';
import { ReasonDeletingModule } from './reason_deleting/reason_deleting.module';
import { OwnerCooperationModule } from './owner_cooperation/owner_cooperation.module';
import { RelationshipTypeModule } from './relationship_type/relationship_type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { MetroModule } from './metro/metro.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), PrismaModule, ObjectTypeModule, ResidenceTypeModule, ObjectCategoryModule, ObjectStatusModule, CurrencyModule, RenovationModule, WindowSideModule, RoomTypeModule, OwnershipModule, ReasonDeletingModule, OwnerCooperationModule, RelationshipTypeModule, RegionModule, DistrictModule, MetroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
