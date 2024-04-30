import { Injectable } from '@nestjs/common';
import { CreateRelationshipTypeDto } from './dto/create-relationship_type.dto';
import { UpdateRelationshipTypeDto } from './dto/update-relationship_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RelationshipTypeService {
  constructor(private prismaService: PrismaService) {}

  create(createRelationshipTypeDto: CreateRelationshipTypeDto) {
    return this.prismaService.relationshipType.create({
      data: {
        name: createRelationshipTypeDto.name,
      },
    });
  }

  findAll() {
    this.prismaService.relationshipType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.relationshipType.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRelationshipTypeDto: UpdateRelationshipTypeDto) {
    return this.prismaService.relationshipType.update({
      where: {
        id: id,
      },
      data: {
        name: updateRelationshipTypeDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.relationshipType.delete({
      where: {
        id: id,
      },
    });
  }
}
