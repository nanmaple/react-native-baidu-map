"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//分割时间
class Time {
    /**
    * 投注时间分割
    * @param time 时间
    * @param type 类型（0：年月 、1：时间）
    */
    static transform(time, type) {
        let getTime;
        let Time;
        Time = typeof time == "string" ? time : time.toString();
        let betTime = new Date(Time);
        if (type == 0) {
            getTime = betTime.toLocaleDateString();
        }
        if (type == 1) {
            let hour = betTime.getHours();
            let minute = betTime.getMinutes();
            let second = betTime.getSeconds();
            hour = hour < 10 ? "0" + hour : hour;
            minute = minute < 10 ? "0" + minute : minute;
            second = second < 10 ? "0" + second : second;
            getTime = hour + ":" + minute + ":" + second;
        }
        return getTime;
    }
}
exports.Time = Time;
//# sourceMappingURL=Time.js.map