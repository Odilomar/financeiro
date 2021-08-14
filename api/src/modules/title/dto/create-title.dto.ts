import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTitleDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
