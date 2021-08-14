import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async create(args: CreateUserDto) {
    const user = this.userRepository.create({ ...args });
    return this.userRepository.save(user);
  }

  async update(id: number, args: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) throw new NotFoundException(USERNOTFOUND);

    Object.assign(user, args);

    return this.userRepository.save(user);
  }
}
