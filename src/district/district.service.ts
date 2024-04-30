import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DistrictService {
  constructor(private prismaService: PrismaService) {}

  create(createDistrictDto: CreateDistrictDto) {
    return this.prismaService.district.create({
      data: {
        name: createDistrictDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.district.findMany();
  }

  findOne(id: number) {
    return this.prismaService.district.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.prismaService.district.update({
      where: {
        id: id,
      },
      data: {
        name: updateDistrictDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.district.delete({
      where: {
        id: id,
      },
    });
  }
}
