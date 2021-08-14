import { Body, Controller, Post } from '@nestjs/common';
import { CreateTitleDto } from './dto';
import { TitleService } from './title.service';

@Controller('titles')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Post()
  async create(@Body() args: CreateTitleDto) {
    return this.titleService.create(args);
  }
}
