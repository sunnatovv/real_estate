import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerCooperationDto } from './create-owner_cooperation.dto';

export class UpdateOwnerCooperationDto extends PartialType(CreateOwnerCooperationDto) {}
