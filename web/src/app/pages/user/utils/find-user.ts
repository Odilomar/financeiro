import { GenericFind } from 'src/app/core/utils';

export class FindUser extends GenericFind {
  name?: string;

  constructor(name?: string) {
    super();

    this.name = name;
  }
}
