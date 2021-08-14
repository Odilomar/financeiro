import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateNonPaymentDto,
  FindNonPaymentDto,
  UpdateNonPaymentDto,
} from './dto';
import { NonPaymentService } from './nonpayment.service';

@Controller('nonpayments')
export class NonPaymentController {
  constructor(private readonly nonPaymentService: NonPaymentService) {}

  @Get()
  async find(@Query() args: FindNonPaymentDto) {
    return this.nonPaymentService.find(args);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.nonPaymentService.findOne({ id });
  }

  @Post()
  async create(@Body() args: CreateNonPaymentDto) {
    return this.nonPaymentService.create(args);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() args: UpdateNonPaymentDto,
  ) {
    return this.nonPaymentService.update(id, args);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.nonPaymentService.delete(id);
  }
}
