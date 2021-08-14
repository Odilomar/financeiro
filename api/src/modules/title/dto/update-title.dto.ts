import { IsOptional } from 'class-validator';

export class UpdateTitleDto {
  @IsOptional()
  name: string;
}
