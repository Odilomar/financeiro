import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NonpaymentController } from './nonpayment.controller';
import { NonPaymentORM } from './nonpayment.entity';
import { NonpaymentService } from './nonpayment.service';

@Module({
  imports: [TypeOrmModule.forFeature([NonPaymentORM])],
  controllers: [NonpaymentController],
  providers: [NonpaymentService],
})
export class NonpaymentModule {}
