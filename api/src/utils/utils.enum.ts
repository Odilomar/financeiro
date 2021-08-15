export class OrderEnum {
  static ASC = 'ASC';
  static DESC = 'DESC';

  static all = [OrderEnum.ASC, OrderEnum.DESC];

  static exists(order: string) {
    return this.all.includes(order);
  }
}
