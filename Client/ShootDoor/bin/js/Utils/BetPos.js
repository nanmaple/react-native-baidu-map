var Utils;
(function (Utils) {
    //投注类型
    var BetPos = (function () {
        function BetPos() {
        }
        /**
         * 投注类型结果转换
         */
        BetPos.transform = function (type) {
            var result;
            if (type == Enum.BetPosType.IN) {
                result = "射进";
            }
            if (type == Enum.BetPosType.OUT) {
                result = "射偏";
            }
            if (type == Enum.BetPosType.HIT) {
                result = "撞柱";
            }
            if (type == Enum.BetPosType.BIG) {
                result = "大";
            }
            if (type == Enum.BetPosType.SMALL) {
                result = "小";
            }
            if (type == Enum.BetPosType.ODD) {
                result = "单";
            }
            if (type == Enum.BetPosType.EVEN) {
                result = "双";
            }
            if (type == Enum.BetPosType.RED) {
                result = "红";
            }
            if (type == Enum.BetPosType.BLACK) {
                result = "黑";
            }
            return result;
        };
        return BetPos;
    }());
    Utils.BetPos = BetPos;
})(Utils || (Utils = {}));
