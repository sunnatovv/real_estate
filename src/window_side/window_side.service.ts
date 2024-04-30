import { Injectable } from '@nestjs/common';
import { CreateWindowSideDto } from './dto/create-window_side.dto';
import { UpdateWindowSideDto } from './dto/update-window_side.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WindowSideService {
  constructor(private prismaService: PrismaService) {}

  create(createWindowSideDto: CreateWindowSideDto) {
    return this.prismaService.residentType.create({
      data: {
        name: createWindowSideDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.windowSide.findMany();
  }

  findOne(id: number) {
    return this.prismaService.windowSide.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateWindowSideDto: UpdateWindowSideDto) {
    return this.prismaService.windowSide.update({
      where: {
        id: id,
      },
      data: {
        name: updateWindowSideDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.windowSide.delete({
      where: {
        id: id,
      },
    });
  }
}
