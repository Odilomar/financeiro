import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateTitleDto } from './dto';
import { TitleService } from './title.service';

@Controller('titles')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.titleService.findOne({ id });
  }

  @Post()
  async create(@Body() args: CreateTitleDto) {
    return this.titleService.create(args);
  }
}
