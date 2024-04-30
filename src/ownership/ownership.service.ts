import { Injectable } from '@nestjs/common';
import { CreateOwnershipDto } from './dto/create-ownership.dto';
import { UpdateOwnershipDto } from './dto/update-ownership.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OwnershipService {
  constructor(private prismaService: PrismaService) {}

  create(createOwnershipDto: CreateOwnershipDto) {
    return this.prismaService.ownership.create({
      data: {
        name: createOwnershipDto.name,
      },
    });
  }

  findAll() {
        this.prismaService.ownership.findMany();

  }

  findOne(id: number) {
    return this.prismaService.ownership.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateOwnershipDto: UpdateOwnershipDto) {
    return this.prismaService.ownership.update({
      where: {
        id: id,
      },
      data: {
        name: updateOwnershipDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.ownership.delete({
      where: {
        id: id,
      },
    });
  }
}
