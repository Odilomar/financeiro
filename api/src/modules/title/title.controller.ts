import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTitleDto, UpdateTitleDto } from './dto';
import { FindTitleDto } from './dto/find-title.dto';
import { TitleService } from './title.service';

@Controller('titles')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Get()
  async find(@Query() args: FindTitleDto) {
    return this.titleService.find(args);
  }

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

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.titleService.delete(id);
  }
}
