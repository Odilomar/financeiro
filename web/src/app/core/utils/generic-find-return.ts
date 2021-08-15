export class GenericFindReturn<T> {
  data: T[];
  total: number;
  take: number;
  skip: number;

  constructor(
    data: T[] = [],
    total: number = 0,
    take: number = 0,
    skip: number = 0
  ) {
    this.data = data;
    this.total = total;
    this.take = take;
    this.skip = skip;
  }
}
