import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNonPaymentDto, UpdateNonPaymentDto } from './dto';
import { NonPaymentService } from './nonpayment.service';

@Controller('nonpayments')
export class NonPaymentController {
  constructor(private readonly nonPaymentService: NonPaymentService) {}

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.nonPaymentService.findOne({ id });
  }

  @Post()
  async create(@Body() args: CreateNonPaymentDto) {
    return this.nonPaymentService.create(args);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() args: UpdateNonPaymentDto,
  ) {
    return this.nonPaymentService.update(id, args);
  }
}
