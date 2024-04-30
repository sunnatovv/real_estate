import { Injectable } from '@nestjs/common';
import { CreateMetroDto } from './dto/create-metro.dto';
import { UpdateMetroDto } from './dto/update-metro.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MetroService {
  constructor(private prismaService: PrismaService) {}

  create(createMetroDto: CreateMetroDto) {
    return this.prismaService.metro.create({
      data: {
        name: createMetroDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.metro.findMany();
  }

  findOne(id: number) {
    return this.prismaService.metro.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateMetroDto: UpdateMetroDto) {
    return this.prismaService.metro.update({
      where: {
        id: id,
      },
      data: {
        name: updateMetroDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.metro.delete({
      where: {
        id: id,
      },
    });
  }
}
