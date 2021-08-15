import { User } from './user';

export class FindUserReturn {
  data: User[] = [];
  total: number = 0;
  take: number = 0;
  skip: number = 0;
}
