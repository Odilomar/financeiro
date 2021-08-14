import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericFindReturnDto, objectToArray, Where } from 'src/utils';
import { Repository } from 'typeorm';
import { TITLENOTFOUND } from '.';
import { CreateTitleDto, UpdateTitleDto, FindTitleDto } from './dto';
import { DEFAULTTITLERELATIONS, TITLECANTBEDELETED } from './title.const';
import { TitleORM } from './title.entity';

@Injectable()
export class TitleService {
  constructor(
    @InjectRepository(TitleORM)
    private readonly titleRepository: Repository<TitleORM>,
  ) {}

  async find({ take, skip, ...args }: FindTitleDto) {
    const where = await objectToArray<TitleORM>(args);

    const [data, total] = await this.titleRepository.findAndCount({
      where,
      relations: DEFAULTTITLERELATIONS,
    });

    return {
      data,
      total,
      take,
      skip,
    } as GenericFindReturnDto<TitleORM>;
  }

  async findOne(where: Where<TitleORM>) {
    const title = await this.titleRepository.findOne({
      where,
      relations: DEFAULTTITLERELATIONS,
    });
    if (!title) throw new NotFoundException(TITLENOTFOUND);

    return title;
  }

  async create(args: CreateTitleDto) {
    const title = this.titleRepository.create({ ...args });
    return this.titleRepository.save(title);
  }

  async update(id: number, args: UpdateTitleDto) {
    const title = await this.findOne({ id });

    Object.assign(title, args);

    return this.titleRepository.save(title);
  }

  async delete(id: number) {
    const title = await this.findOne({ id });

    if (title.nonPayments.length > 0)
      throw new UnauthorizedException(TITLECANTBEDELETED);

    await this.titleRepository.delete({ id });
  }
}
