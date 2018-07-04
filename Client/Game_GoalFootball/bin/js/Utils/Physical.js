var Utils;
(function (Utils) {
    var Physical = (function () {
        function Physical() {
        }
        /**
     * 获取单位时间内加速度运动的位移
     * @param time 时长
     * @param speed 初始速度
     * @param acceleration 加速度
     */
        Physical.GetHeightByTime = function (speed, time, acceleration) {
            var fm1 = Utils.Float.Mul(speed, time);
            var fm2 = Utils.Float.Mul(acceleration, time);
            var fm3 = Utils.Float.Mul(fm2, time);
            var fd1 = Utils.Float.Div(fm3, 2);
            return Utils.Float.Add(fm1, fd1);
        };
        /**
         * 获取加速度一定时间后的速度
         * @param speed 开始速度
         * @param acceleration 加速度
         * @param time 时长
         */
        Physical.GetSpeed = function (speed, acceleration, time) {
            var fm = Utils.Float.Mul(acceleration, time);
            return Utils.Float.Add(speed, fm);
        };
        /**
         * 根据前后速度和加速度，获取时间
         * @param startSpeed 开始速度
         * @param endSpeed 结束速度
         * @param acceleration 加速度
         */
        Physical.GetFrame = function (startSpeed, endSpeed, acceleration) {
            var fs = Utils.Float.Sub(endSpeed, startSpeed);
            return Utils.Float.Div(fs, acceleration);
        };
        return Physical;
    }());
    Utils.Physical = Physical;
})(Utils || (Utils = {}));
//# sourceMappingURL=Physical.js.map