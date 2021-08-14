import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTitleDto, UpdateTitleDto } from './dto';
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

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() args: UpdateTitleDto,
  ) {
    return this.titleService.update(id, args);
  }
}
