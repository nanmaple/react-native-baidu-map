/// <reference path="../Base/Utils/Storage.ts"/>
/// <reference path="./Config.ts"/>
var LanguageUtils;
(function (LanguageUtils) {
    var Language = /** @class */ (function () {
        function Language() {
            this.CurrentLangue = null;
        }
        /**
         * 设置语言
         * @param lang 语言类型
         * @param gameID 游戏ID，默认所有游戏通用语言，设置后为具体某种游戏的语言
         */
        Language.prototype.SetLanguage = function (lang, gameID) {
            if (gameID === void 0) { gameID = 0; }
            var storage = new Utils.Storage();
            var key = this.GetLanguageKey(gameID);
            storage.SetLocalStorage(key, lang);
            this.CurrentLangue = lang;
            return true;
        };
        /**
         * 根据多语言键值，获取对应
         * @param key
         * @param gameID
         */
        Language.prototype.GetLanguage = function (key, gameID) {
            if (gameID === void 0) { gameID = 0; }
            if (this.CurrentLangue === null) {
                var storage = new Utils.Storage();
                var key_1 = this.GetLanguageKey(LanguageUtils.GameID);
                var lang = storage.GetLocalStorage(key_1);
                if (!lang) {
                    this.CurrentLangue = LanguageUtils.DefaultLanguage;
                }
                else {
                    this.CurrentLangue = lang;
                }
            }
            return LanguageUtils[LanguageUtils.LanguageType[this.CurrentLangue]][key];
        };
        /**
         * 获取游戏语言key，传入gameID,
         * @param gameID
         */
        Language.prototype.GetLanguageKey = function (gameID) {
            if (gameID === void 0) { gameID = 0; }
            return "EGame-" + gameID + "-Language-Key";
        };
        return Language;
    }());
    LanguageUtils.Language = Language;
})(LanguageUtils || (LanguageUtils = {}));
