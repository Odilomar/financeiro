import { GenericFind } from 'src/app/core/utils';

export class FindTitle extends GenericFind {
  title?: string;

  constructor(title?: string) {
    super();

    this.title = title;
  }
}
