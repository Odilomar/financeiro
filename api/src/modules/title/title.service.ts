import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Where } from 'src/utils';
import { Repository } from 'typeorm';
import { TITLENOTFOUND } from '.';
import { CreateTitleDto, UpdateTitleDto } from './dto';
import { TitleORM } from './title.entity';

@Injectable()
export class TitleService {
  constructor(
    @InjectRepository(TitleORM)
    private readonly titleRepository: Repository<TitleORM>,
  ) {}

  async findOne(where: Where<TitleORM>) {
    const title = await this.titleRepository.findOne({ where });
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

    return this.titleRepository.delete(title);
  }
}
