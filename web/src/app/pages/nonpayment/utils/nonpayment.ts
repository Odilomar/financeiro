import { Title } from '../../title/utils';
import { User } from '../../user/utils';

export class NonPayment {
  id: number;
  user_id: number;
  title_id: number;
  value: number;
  title: Title[];
  user: User[];
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number = 0,
    value: number = 0,
    user_id: number = 0,
    title_id: number = 0,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    title: Title[] = [],
    user: User[] = []
  ) {
    this.id = id;
    this.value = value;
    this.title_id = title_id;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.title = title;
    this.user = user;
  }
}
