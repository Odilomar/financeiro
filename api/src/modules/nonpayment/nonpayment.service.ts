import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  formatToOrder,
  GenericFindReturnDto,
  objectToArray,
  Where,
} from 'src/utils';
import { Repository } from 'typeorm';
import { TitleService, UserService } from '..';
import {
  CreateNonPaymentDto,
  FindNonPaymentDto,
  UpdateNonPaymentDto,
} from './dto';
import {
  DEFAULTNONPAYMENTRELATIONS,
  NONPAYMENTNOTFOUND,
} from './nonpayment.const';
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

  async find({ take, skip, column, order, ...args }: FindNonPaymentDto) {
    const where = await objectToArray<NonPaymentORM>(args);

    const [data, total] = await this.nonPaymentRepository.findAndCount({
      where,
      relations: DEFAULTNONPAYMENTRELATIONS,
      order: formatToOrder({ column, order }),
    });

    return {
      data,
      total,
      take,
      skip,
    } as GenericFindReturnDto<NonPaymentORM>;
  }

  async findOne(where?: Where<NonPaymentORM>) {
    const nonPayment = await this.nonPaymentRepository.findOne({
      where,
      relations: DEFAULTNONPAYMENTRELATIONS,
    });
    if (!nonPayment) throw new NotFoundException(NONPAYMENTNOTFOUND);

    return nonPayment;
  }

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

  async update(
    id: number,
    { title_id, user_id, ...args }: UpdateNonPaymentDto,
  ) {
    const nonPayment = await this.findOne({ id });

    if (title_id)
      nonPayment.title = await this.titleService.findOne({ id: title_id });
    if (user_id)
      nonPayment.user = await this.userService.findOne({ id: user_id });

    Object.assign(nonPayment, args);

    return this.nonPaymentRepository.save(nonPayment);
  }

  async delete(id: number) {
    await this.findOne({ id });

    await this.nonPaymentRepository.delete({ id });
  }
}
