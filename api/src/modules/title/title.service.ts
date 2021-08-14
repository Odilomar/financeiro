import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTitleDto } from './dto';
import { TitleORM } from './title.entity';

@Injectable()
export class TitleService {
  constructor(
    @InjectRepository(TitleORM)
    private readonly titleRepository: Repository<TitleORM>,
  ) {}

  async create(args: CreateTitleDto) {
    const title = this.titleRepository.create({ ...args });
    return this.titleRepository.save(title);
  }
}
