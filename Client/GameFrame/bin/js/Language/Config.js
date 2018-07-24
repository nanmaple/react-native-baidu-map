/**
 * 多语言配置文件
 * 根据实际需要的语言项，添加或者删除语言项
 */
var LanguageUtils;
(function (LanguageUtils) {
    var LanguageType;
    (function (LanguageType) {
        LanguageType[LanguageType["CH"] = 0] = "CH";
        LanguageType[LanguageType["EN"] = 1] = "EN";
    })(LanguageType = LanguageUtils.LanguageType || (LanguageUtils.LanguageType = {}));
    var lang = Laya.Browser.window.navigator.language || Laya.Browser.window.navigator["userLanguage"]; //常规浏览器语言和IE浏览器  
    lang = lang.substr(0, 2); //截取lang前2位字符 
    var defaultLanguage = LanguageType.CH;
    if (lang == 'zh') {
        defaultLanguage = LanguageType.CH;
    }
    else {
        defaultLanguage = LanguageType.EN;
    }
    /**
     * 默认语言
     */
    LanguageUtils.DefaultLanguage = defaultLanguage;
    /**
     * 游戏ID独立语言
     * 如果游戏ID为0，则通用游戏语言
     * 如果游戏ID>0,则为独有语言
     */
    LanguageUtils.GameID = GameConfig.GameID;
})(LanguageUtils || (LanguageUtils = {}));
//# sourceMappingURL=Config.js.map