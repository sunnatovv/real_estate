import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationshipTypeService } from './relationship_type.service';
import { CreateRelationshipTypeDto } from './dto/create-relationship_type.dto';
import { UpdateRelationshipTypeDto } from './dto/update-relationship_type.dto';

@Controller('relationship-type')
export class RelationshipTypeController {
  constructor(private readonly relationshipTypeService: RelationshipTypeService) {}

  @Post()
  create(@Body() createRelationshipTypeDto: CreateRelationshipTypeDto) {
    return this.relationshipTypeService.create(createRelationshipTypeDto);
  }

  @Get()
  findAll() {
    return this.relationshipTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationshipTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationshipTypeDto: UpdateRelationshipTypeDto) {
    return this.relationshipTypeService.update(+id, updateRelationshipTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationshipTypeService.remove(+id);
  }
}
