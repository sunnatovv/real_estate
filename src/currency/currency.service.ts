import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CurrencyService {
  constructor(private prismaService: PrismaService) {}
  create(createCurrencyDto: CreateCurrencyDto) {
    return this.prismaService.currency.create({
      data: {
        name: createCurrencyDto.name,
      },
    });
  }

  findAll() {
    return this.prismaService.currency.findMany();
  }

  findOne(id: number) {
    return this.prismaService.currency.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return this.prismaService.currency.update({
      where: {
        id: id,
      },
      data: {
        name: updateCurrencyDto.name,
      },
    });
  }

  remove(id: number) {
     return this.prismaService.currency.delete({
       where: {
         id: id,
       },
     });
  }
}
