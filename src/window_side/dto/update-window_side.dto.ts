import { PartialType } from '@nestjs/mapped-types';
import { CreateWindowSideDto } from './create-window_side.dto';

export class UpdateWindowSideDto extends PartialType(CreateWindowSideDto) {}
