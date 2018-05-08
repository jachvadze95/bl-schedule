export class Localization {
  private static loc = {
    'ka-GE': {
      "Days": [
        { id: 1, text: "ორშაბათი" },
        { id: 2, text: "სამშაბათი" },
        { id: 3, text: "ოთხშაბათი" },
        { id: 4, text: "ხუთშაბათი" },
        { id: 5, text: "პარასკევი" },
        { id: 6, text: "შაბათი" },
        { id: 0, text: "კვირა" }
      ],
      "DaysMin": [
        { id: 1, text: "ორშ" },
        { id: 2, text: "სამ" },
        { id: 3, text: "ოთხ" },
        { id: 4, text: "ხუთ" },
        { id: 5, text: "პარ" },
        { id: 6, text: "შაბ" },
        { id: 0, text: "კვი" }
      ],
      "Translations": {
        "WeekDay": "დღე",
        "MonthDay": "რიცხვი",
        "StartTime": "დრო"
      }
    },
    'en-US': {
      "Days": [
        { id: 1, text: "Monday" },
        { id: 2, text: "Thuesday" },
        { id: 3, text: "Wednesday" },
        { id: 4, text: "Thursday" },
        { id: 5, text: "Friday" },
        { id: 6, text: "Saturday" },
        { id: 0, text: "Sunday" }
      ],
      "DaysMin": [
        { id: 1, text: "Mon" },
        { id: 2, text: "Tue" },
        { id: 3, text: "Wed" },
        { id: 4, text: "Thu" },
        { id: 5, text: "Fri" },
        { id: 6, text: "Sat" },
        { id: 0, text: "Sun" }
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