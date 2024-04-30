import { PartialType } from '@nestjs/mapped-types';
import { CreateRelationshipTypeDto } from './create-relationship_type.dto';

export class UpdateRelationshipTypeDto extends PartialType(CreateRelationshipTypeDto) {}
