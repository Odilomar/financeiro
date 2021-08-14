import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { GenericFindDto } from 'src/utils';

export class FindNonPaymentDto extends GenericFindDto {
  @IsOptional()
  @IsInt()
  user_id: number;

  @IsOptional()
  @IsInt()
  title_id: number;

  @IsOptional()
  @Type(() => Number)
  maxValue: number;

  @IsOptional()
  @Type(() => Number)
  minValue: number;
}
