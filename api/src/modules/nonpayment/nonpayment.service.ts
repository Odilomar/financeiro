import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitleService, UserService } from '..';
import { CreateNonPaymentDto } from './dto';
import { NonPaymentORM } from './nonpayment.entity';

@Injectable()
export class NonPaymentService {
  constructor(
    @InjectRepository(NonPaymentORM)
    private readonly nonPaymentRepository: Repository<NonPaymentORM>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => TitleService))
    private readonly titleService: TitleService,
  ) {}

  async create({ user_id, title_id, ...args }: CreateNonPaymentDto) {
    const user = await this.userService.findOne({ id: user_id });
    const title = await this.titleService.findOne({ id: title_id });

    const nonPayment = await this.nonPaymentRepository.create({
      user,
      title,
      ...args,
    });

    return this.nonPaymentRepository.save(nonPayment);
  }
}
