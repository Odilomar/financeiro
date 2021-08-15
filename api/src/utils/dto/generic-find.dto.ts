import { Type } from 'class-transformer';
import { IsOptional, IsIn } from 'class-validator';
import {
  DEFAULT_ORDER_COLUMN,
  DEFAULT_SKIP,
  DEFAULT_TAKE,
} from '../utils.const';
import { OrderEnum } from '../utils.enum';

export class GenericFindDto {
  @IsOptional()
  @Type(() => Number)
  take: number = DEFAULT_TAKE;

  @IsOptional()
  @Type(() => Number)
  skip: number = DEFAULT_SKIP;

  @IsOptional()
  column: string = DEFAULT_ORDER_COLUMN;

  @IsOptional()
  @IsIn(OrderEnum.all)
  order: string = OrderEnum.ASC;
}
