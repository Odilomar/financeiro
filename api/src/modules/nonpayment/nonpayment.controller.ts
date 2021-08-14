import { Body, Controller, Post } from '@nestjs/common';
import { CreateNonPaymentDto } from './dto';
import { NonPaymentService } from './nonpayment.service';

@Controller('nonpayments')
export class NonPaymentController {
  constructor(private readonly nonPaymentService: NonPaymentService) {}

  @Post()
  async create(@Body() args: CreateNonPaymentDto) {
    return this.nonPaymentService.create(args);
  }
}
