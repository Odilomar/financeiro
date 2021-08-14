import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleModule } from '../title';
import { UserModule } from '../user';
import { NonPaymentController } from './nonpayment.controller';
import { NonPaymentORM } from './nonpayment.entity';
import { NonPaymentService } from './nonpayment.service';

@Module({
  imports: [TypeOrmModule.forFeature([NonPaymentORM]), UserModule, TitleModule],
  controllers: [NonPaymentController],
  providers: [NonPaymentService],
})
export class NonPaymentModule {}
