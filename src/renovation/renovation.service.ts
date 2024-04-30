import { Injectable } from '@nestjs/common';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RenovationService {
  constructor(private prismaService: PrismaService) {}

  create(createRenovationDto: CreateRenovationDto) {
    return this.prismaService.renovation.create({
      data: {
        name: createRenovationDto.name,
      },
    });
  }

  findAll() {
        this.prismaService.renovation.findMany();

  }

  findOne(id: number) {
    return this.prismaService.renovation.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRenovationDto: UpdateRenovationDto) {
    return this.prismaService.renovation.update({
      where: {
        id: id,
      },
      data: {
        name: updateRenovationDto.name,
      },
    });
  }

  remove(id: number) {
     return this.prismaService.renovation.delete({
       where: {
         id: id,
       },
     });;
  }
}
