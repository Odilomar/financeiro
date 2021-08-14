import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() args: CreateUserDto) {
    return this.userService.create(args);
  }
}
