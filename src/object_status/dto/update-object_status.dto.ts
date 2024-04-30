import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectStatusDto } from './create-object_status.dto';

export class UpdateObjectStatusDto extends PartialType(CreateObjectStatusDto) {}
