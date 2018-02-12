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
            var language = new LanguageUtils.Language();
            var result;
            if (type == Enum.BetPosType.IN) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.OUT) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.HIT) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.BIG) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.SMALL) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.ODD) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.EVEN) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.RED) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.BLACK) {
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if (type == Enum.BetPosType.LOUT) {
                result = language.GetLanguage("leftOut");
            }
            if (type == Enum.BetPosType.ROUT) {
                result = language.GetLanguage("rightOut");
            }
            if (type == Enum.BetPosType.LHIT) {
                result = language.GetLanguage("leftHit");
            }
            if (type == Enum.BetPosType.RHIT) {
                result = language.GetLanguage("rightHit");
            }
            return result;
        };
        return BetPos;
    }());
    Utils.BetPos = BetPos;
})(Utils || (Utils = {}));
