import { Injectable } from '@nestjs/common';
import { CreateOwnerCooperationDto } from './dto/create-owner_cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner_cooperation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OwnerCooperationService {
  constructor(private prismaService: PrismaService) {}

  create(createOwnerCooperationDto: CreateOwnerCooperationDto) {
    return this.prismaService.ownerCoorperation.create({
      data: {
        name: createOwnerCooperationDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.ownerCoorperation.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ownerCoorperation.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateOwnerCooperationDto: UpdateOwnerCooperationDto) {
    return this.prismaService.ownerCoorperation.update({
      where: {
        id: id,
      },
      data: {
        name: updateOwnerCooperationDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.ownerCoorperation.delete({
      where: {
        id: id,
      },
    });
  }
}
