import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectTypeDto } from './create-object_type.dto';

export class UpdateObjectTypeDto extends PartialType(CreateObjectTypeDto) {}
