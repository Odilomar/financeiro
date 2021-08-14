import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Where } from 'src/utils';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { USERNOTFOUND } from './user.const';
import { UserORM } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserORM)
    private readonly userRepository: Repository<UserORM>,
  ) {}

  async findOne(where?: Where<UserORM>) {
    const user = this.userRepository.findOne({ where });
    if (!user) throw new NotFoundException(USERNOTFOUND);

    return user;
  }

  async create(args: CreateUserDto) {
    const user = this.userRepository.create({ ...args });
    return this.userRepository.save(user);
  }

  async update(id: number, args: UpdateUserDto) {
    const user = await this.findOne({ id });

    Object.assign(user, args);

    return this.userRepository.save(user);
  }

  async delete(id: number) {
    const user = await this.findOne({ id });

    return this.userRepository.delete(user);
  }
}
