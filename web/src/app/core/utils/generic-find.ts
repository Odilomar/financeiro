import { DEFAULT_ORDER_COLUMN, DEFUALT_SKIP, DEFUALT_TAKE } from '.';

type Order = 'ASC' | 'DESC';

export class GenericFind {
  take?: number = DEFUALT_TAKE;
  skip?: number = DEFUALT_SKIP;
  column?: string = DEFAULT_ORDER_COLUMN;
  order?: Order;

  constructor(
    take: number = DEFUALT_TAKE,
    skip: number = DEFUALT_SKIP,
    column: string = DEFAULT_ORDER_COLUMN,
    order: Order = 'ASC'
  ) {
    this.take = take;
    this.skip = skip;
    this.column = column;
    this.order = order;
  }
}
