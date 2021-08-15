export class User {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  nonPayments!: any[];

  constructor(
    id: number = 0,
    name: string = '',
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    nonPayments: any[] = []
  ) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.nonPayments = nonPayments;
  }
}
