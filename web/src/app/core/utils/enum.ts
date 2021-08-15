export class TypeEnum {
  static USER = 'USER';
  static TITLE = 'TITLE';
  static NONPAYMENT = 'NONPAYMENT';

  static all = [TypeEnum.USER, TypeEnum.TITLE, TypeEnum.NONPAYMENT];

  static exists(type: string) {
    return this.all.includes(type);
  }
}
