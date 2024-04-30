import { Injectable } from '@nestjs/common';
import { CreateResidenceTypeDto } from './dto/create-residence_type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResidenceTypeService {
  constructor(private prismaService: PrismaService) {}
  create(createResidenceTypeDto: CreateResidenceTypeDto) {
    return this.prismaService.residentType.create({
      data: {
        name: createResidenceTypeDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.residentType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.residentType.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateResidenceTypeDto: UpdateResidenceTypeDto) {
    return this.prismaService.residentType.update({
      where: {
        id: id,
      },
      data: {
        name: updateResidenceTypeDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.residentType.delete({
      where: {
        id: id,
      },
    });
  }
}
