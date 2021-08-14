import { FindConditions, ObjectLiteral } from 'typeorm';

export type Where<T> =
  | string
  | ObjectLiteral
  | FindConditions<T>
  | FindConditions<T>[];
