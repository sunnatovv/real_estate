import { Injectable } from '@nestjs/common';
import { CreateObjectStatusDto } from './dto/create-object_status.dto';
import { UpdateObjectStatusDto } from './dto/update-object_status.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectStatusService {
  constructor(private prismaService: PrismaService) {}
  create(createObjectStatusDto: CreateObjectStatusDto) {
    return this.prismaService.objectStatus.create({
      data: {
        name: createObjectStatusDto.name,
      },
    });
  }

  findAll() {
    return this.prismaService.objectStatus.findMany();
  }

  findOne(id: number) {
    return this.prismaService.objectStatus.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateObjectStatusDto: UpdateObjectStatusDto) {
    return this.prismaService.objectStatus.update({
      where: {
        id: id,
      },
      data: {
        name: updateObjectStatusDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.objectStatus.delete({
      where: {
        id: id,
      },
    });
  }
}
