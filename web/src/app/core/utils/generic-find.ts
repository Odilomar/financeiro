import { DEFAULT_ORDER_COLUMN, DEFUALT_SKIP, DEFUALT_TAKE } from '.';

export class GenericFind {
  take?: number = DEFUALT_TAKE;
  skip?: number = DEFUALT_SKIP;
  column?: string = DEFAULT_ORDER_COLUMN;
  order?: 'ASC' | 'DESC';
}
