export class GenericFindReturnDto<T> {
  data: Array<T>;
  total: number;
  take: number;
  skip: number;
}
