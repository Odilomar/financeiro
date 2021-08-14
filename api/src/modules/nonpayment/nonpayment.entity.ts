import { ColumnNumericTransformer } from 'src/utils';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserORM, TitleORM } from '..';

@Entity('nonpayment')
export class NonPaymentORM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  title_id: number;

  @Column({
    type: 'numeric',
    precision: 20,
    scale: 2,
    nullable: false,
    default: 0.0,
    transformer: new ColumnNumericTransformer(),
  })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne((type) => UserORM, (x) => x.nonPayments)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserORM;

  @ManyToOne((type) => TitleORM, (x) => x.nonPayments)
  @JoinColumn({ name: 'title_id', referencedColumnName: 'id' })
  title?: TitleORM;
}
