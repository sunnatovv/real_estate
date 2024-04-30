import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prismaService: PrismaService) {}

  create(createRegionDto: CreateRegionDto) {
    return this.prismaService.region.create({
      data: {
        name: createRegionDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.region.findMany();
  }

  findOne(id: number) {
    return this.prismaService.region.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.prismaService.region.update({
      where: {
        id: id,
      },
      data: {
        name: updateRegionDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.region.delete({
      where: {
        id: id,
      },
    });
  }
}
