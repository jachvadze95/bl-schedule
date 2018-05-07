export class Schedule {
  public weekDays: Array<number>;
  public monthDays: Array<number>;
  public startTime: string;

  constructor() {
    this.weekDays = [],
    this.monthDays = []
  }
}
