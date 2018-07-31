/**
 * 工具类-时间格式转换
 */
var Utils;
(function (Utils) {
    //分割时间
    var Time = (function () {
        function Time() {
        }
        /**
        * 投注时间分割
        * @param time 时间
        * @param type 类型（0：年月 、1：时间）
        */
        Time.transform = function (time, type) {
            var getTime;
            var Time;
            Time = typeof time == "string" ? time : time.toString();
            var regEx = new RegExp("\\-", "gi");
            Time = Time.replace(regEx, "/");
            var betTime = new Date(Time);
            if (type == 0) {
                var year = betTime.getFullYear();
                var month = betTime.getMonth() + 1;
                var day = betTime.getDate();
                getTime = year + "/" + month + "/" + day;
            }
            if (type == 1) {
                var hour = betTime.getHours();
                var minute = betTime.getMinutes();
                var second = betTime.getSeconds();
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
                getTime = hour + ":" + minute + ":" + second;
            }
            return getTime;
        };
        return Time;
    }());
    Utils.Time = Time;
})(Utils || (Utils = {}));
//# sourceMappingURL=Time.js.map