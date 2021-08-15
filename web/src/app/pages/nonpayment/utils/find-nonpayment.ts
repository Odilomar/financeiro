import { GenericFind } from 'src/app/core/utils';

export class FindNonPayment extends GenericFind {
  user_id?: number;
  title_id?: number;
  value?: number;

  constructor(value?: number, user_id?: number, title_id?: number) {
    super();

    this.value = value;
    this.user_id = user_id;
    this.title_id = title_id;
  }
}
