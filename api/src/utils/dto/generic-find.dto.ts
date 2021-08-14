import { IsOptional } from 'class-validator';
import { DEFAULT_SKIP, DEFAULT_TAKE } from '../utils.const';

export class GenericFindDto {
  @IsOptional()
  take: number = DEFAULT_TAKE;

  @IsOptional()
  skip: number = DEFAULT_SKIP;
}
