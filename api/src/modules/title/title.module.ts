import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitleController } from './title.controller';
import { TitleORM } from './title.entity';
import { TitleService } from './title.service';

@Module({
  imports: [TypeOrmModule.forFeature([TitleORM])],
  controllers: [TitleController],
  providers: [TitleService],
})
export class TitleModule {}
