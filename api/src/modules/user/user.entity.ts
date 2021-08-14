import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NonPaymentORM } from '../nonpayment/nonpayment.entity';

@Entity('user')
export class UserORM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => NonPaymentORM, (x) => x.user)
  nonPayments?: NonPaymentORM[];
}
