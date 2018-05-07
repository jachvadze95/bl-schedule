"use strict";
exports.__esModule = true;
var Localization = (function () {
    function Localization() {
    }
    Localization.Get = function (lang) {
        var data = this.loc[lang];
        return data;
    };
    Localization.loc = {
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
    };
    return Localization;
}());
exports.Localization = Localization;
var Constants = (function () {
    function Constants() {
    }
    Constants.Eng = "en-US";
    Constants.Geo = "ka-GE";
    return Constants;
}());
exports.Constants = Constants;
