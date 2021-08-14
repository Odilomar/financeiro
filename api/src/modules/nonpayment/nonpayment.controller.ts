import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNonPaymentDto } from './dto';
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
}
