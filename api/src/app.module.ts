import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { UserModule, TitleModule, NonPaymentModule } from './modules';

config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(DB_HOST),
      port: Number(DB_PORT),
      username: String(DB_USER),
      password: String(DB_PASS),
      database: String(DB_NAME),
      entities: [__dirname + '../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      dropSchema: false,
      autoLoadEntities: true,
      keepConnectionAlive: true,
    }),
    UserModule,
    TitleModule,
    NonPaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
