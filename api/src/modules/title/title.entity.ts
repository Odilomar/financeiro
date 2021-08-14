import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NonPaymentORM } from '../nonpayment/nonpayment.entity';

@Entity('title')
export class TitleORM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => NonPaymentORM, (x) => x.title)
  nonPayments?: NonPaymentORM[];
}
