import { Injectable } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomTypeService {
  constructor(private prismaService: PrismaService) {}

  create(createRoomTypeDto: CreateRoomTypeDto) {

    return this.prismaService.roomType.create({
      data: {
        name: createRoomTypeDto.name,
      },
    });
  }

  findAll() {
        this.prismaService.roomType.findMany();

  }

  findOne(id: number) {
    return this.prismaService.roomType.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return this.prismaService.roomType.update({
      where: {
        id: id,
      },
      data: {
        name: updateRoomTypeDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.roomType.delete({
      where: {
        id: id,
      },
    });
  }
}
