import { Injectable } from '@nestjs/common';
import { CreateObjectTypeDto } from './dto/create-object_type.dto';
import { UpdateObjectTypeDto } from './dto/update-object_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectTypeService {
  constructor(private prismaService: PrismaService) {}
  create(createObjectTypeDto: CreateObjectTypeDto) {
    return this.prismaService.objectType.create({
      data: {
        name: createObjectTypeDto.name,
      },
    });
  }

  findAll() {
    return this.prismaService.objectType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.objectType.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return this.prismaService.objectType.update({
      where: {
        id: id,
      },
      data: {
        name: updateObjectTypeDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.objectType.delete({
      where: {
        id: id,
      },
    });
  }
}
