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
            var betTime = new Date(Time);
            if (type == 0) {
                getTime = betTime.toLocaleDateString();
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
