import { IsOptional } from 'class-validator';
import { GenericFindDto } from 'src/utils';

export class FindTitleDto extends GenericFindDto {
  @IsOptional()
  title: string;
}
