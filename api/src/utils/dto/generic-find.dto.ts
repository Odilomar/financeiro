import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DEFAULT_SKIP, DEFAULT_TAKE } from '../utils.const';

export class GenericFindDto {
  @IsOptional()
  @Type(() => Number)
  take: number = DEFAULT_TAKE;

  @IsOptional()
  @Type(() => Number)
  skip: number = DEFAULT_SKIP;
}
