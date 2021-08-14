import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateNonPaymentDto {
  @IsOptional()
  @IsInt()
  user_id: number;

  @IsOptional()
  @IsInt()
  title_id: number;

  @IsOptional()
  @Type(() => Number)
  value: number;
}
