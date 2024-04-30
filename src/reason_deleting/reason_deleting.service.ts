import { Injectable } from '@nestjs/common';
import { CreateReasonDeletingDto } from './dto/create-reason_deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason_deleting.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReasonDeletingService {
  constructor(private prismaService: PrismaService) {}

  create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.create({
      data: {
        name: createReasonDeletingDto.name,
      },
    });
  }

  findAll() {
    return this.prismaService.reasonDeleting.findMany();

  }

  findOne(id: number) {
    return this.prismaService.reasonDeleting.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.update({
      where: {
        id: id,
      },
      data: {
        name: updateReasonDeletingDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.reasonDeleting.delete({
      where: {
        id: id,
      },
    });
  }
}
