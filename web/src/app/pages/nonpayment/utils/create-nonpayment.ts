export class CreateNonPayment {
  user_id: number;
  title_id: number;
  value: number;

  constructor(value: number = 0, user_id: number = 0, title_id: number = 0) {
    this.value = value;
    this.user_id = user_id;
    this.title_id = title_id;
  }
}
