import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateNonPaymentDto {
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @IsNotEmpty()
  @IsInt()
  title_id: number;

  @IsNotEmpty()
  @Type(() => Number)
  value: number;
}
