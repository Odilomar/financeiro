export class Title {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
  nonPayments!: any[];

  constructor(
    id: number = 0,
    title: string = '',
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    nonPayments: any[] = []
  ) {
    this.id = id;
    this.title = title;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.nonPayments = nonPayments;
  }
}
