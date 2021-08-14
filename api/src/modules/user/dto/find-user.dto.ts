import { IsOptional } from 'class-validator';
import { GenericFindDto } from 'src/utils';

export class FindUserDto extends GenericFindDto {
  @IsOptional()
  name: string;
}
