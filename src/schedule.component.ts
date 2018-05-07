import { Component, OnInit, ElementRef, Input, forwardRef, Output } from '@angular/core';
import { Localization } from './localization/index';
import { Schedule } from './schedule.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'schedule-component',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input("options") options: any;

  @Input() schedule: string;
  @Output() scheduleChange = new EventEmitter<string>();

  @Input() disabled: boolean;

  public numbers: number[];
  public days: Array<string>;

  public scheduleModel: Schedule;

  public LocalizationData: any;

  constructor() {
  }

  ngOnInit(): void {
    this.options.language = this.options.language || "en-US";
    this.LocalizationData = Localization.Get(this.options.language);
    this.scheduleModel = new Schedule();

    if (this.schedule) {
      var parsed = JSON.parse(this.schedule);
      this.scheduleModel.monthDays = parsed.monthDays;
      this.scheduleModel.startTime = parsed.startTime;
      this.scheduleModel.weekDays = parsed.weekDays;
    }

    this.days = this.LocalizationData.DaysMin;
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  }

  public selectDay(event: MouseEvent, day: number) {
    var target = event.srcElement;
    target.classList.toggle('selected');

    var dayIndex = this.scheduleModel.monthDays.indexOf(day);
    if (dayIndex > -1) {
      this.scheduleModel.monthDays.splice(dayIndex, 1);
    }
    else {
      this.scheduleModel.monthDays.push(day);
    }

    this.modelOut();
  }

  public selectWeekDay(event: MouseEvent, index: number) {
    var target = event.srcElement;
    target.classList.toggle('selected');

    var dayIndex = this.scheduleModel.weekDays.indexOf(index);
    if (dayIndex > -1) {
      this.scheduleModel.weekDays.splice(dayIndex, 1);
    }
    else {
      this.scheduleModel.weekDays.push(index);
    }

    this.modelOut();
  }

  public modelOut(): void {
    this.schedule = JSON.stringify(this.scheduleModel);
    this.scheduleChange.emit(this.schedule);
  }

  public isDaySelected(day: number): string {
    if (this.scheduleModel.monthDays != undefined || this.scheduleModel.monthDays.length != 0) {
      return this.scheduleModel.monthDays.indexOf(day) > -1 ? 'selected' : '';
    }
    else {
      return '';
    }
  }

  public isWeekDaySelected(weekDay: number): string {
    if (this.scheduleModel.weekDays != undefined || this.scheduleModel.weekDays.length != 0) {
      return this.scheduleModel.weekDays.indexOf(weekDay) > -1 ? 'selected' : '';
    }
    else {
      return '';
    }
  }

  public isTimeChecked(timeOption: string): boolean {
    return this.scheduleModel.startTime == timeOption;
  }
}
