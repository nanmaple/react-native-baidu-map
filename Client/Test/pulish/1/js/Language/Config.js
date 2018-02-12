var LanguageUtils;
(function (LanguageUtils) {
    var LanguageType;
    (function (LanguageType) {
        LanguageType[LanguageType["CH"] = 0] = "CH";
        LanguageType[LanguageType["EN"] = 1] = "EN";
    })(LanguageType = LanguageUtils.LanguageType || (LanguageUtils.LanguageType = {}));
    /**
     * 默认语言
     */
    LanguageUtils.DefaultLanguage = LanguageType.CH;
    /**
     * 游戏ID独立语言
     * 如果游戏ID为0，则通用游戏语言
     * 如果游戏ID>0,则为独有语言
     */
    LanguageUtils.GameID = GameConfig.GameID;
})(LanguageUtils || (LanguageUtils = {}));
