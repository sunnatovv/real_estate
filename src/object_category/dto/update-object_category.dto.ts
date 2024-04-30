import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectCategoryDto } from './create-object_category.dto';

export class UpdateObjectCategoryDto extends PartialType(CreateObjectCategoryDto) {}
