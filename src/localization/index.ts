export class Localization {
  private static loc = {
    'ka-GE': {
      "Days": [
        "კვირა",
        "ორშაბათი",
        "სამშაბათი",
        "ოთხშაბათი",
        "ხუთშაბათი",
        "პარასკევი",
        "შაბათი"
      ],
      "DaysMin": [
        "კვი",
        "ორშ",
        "სამ",
        "ოთხ",
        "ხუთ",
        "პარ",
        "შაბ"
      ],
      "Translations": {
        "WeekDay": "დღე",
        "MonthDay": "რიცხვი",
        "StartTime": "დრო"
      }
    },
    'en-US': {
      "Days": [
        "Sunday",
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "DaysMin": [
        "Sun",
        "Mon",
        "The",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "Translations": {
        "WeekDay": "Week",
        "MonthDay": "Month",
        "StartTime": "Time"
      }
    }

  }
  public static Get(lang: string): any {
    var data = this.loc[lang];
    return data;
  }

}

export class Constants {
  static readonly Eng = "en-US";
  static readonly Geo = "ka-GE";
}
