/// <reference path="../Utils/Storage.ts"/>
/// <reference path="./Config.ts"/>
var LanguageUtils;
(function (LanguageUtils) {
    var Language = (function () {
        function Language() {
            this.CurrentLangue = null;
            this.cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;
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
            storage.Set(key, lang, this.cacheType);
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
                var key_1 = this.GetLanguageKey(gameID);
                var lang = storage.Get(key_1, this.cacheType);
                if (!lang) {
                    this.CurrentLangue = LanguageUtils.DefaultLanguage;
                }
                else if (typeof (lang) != "number") {
                    if (lang == LanguageUtils.LanguageType[0]) {
                        this.CurrentLangue = LanguageUtils.LanguageType.CH;
                    }
                    else {
                        this.CurrentLangue = LanguageUtils.LanguageType.EN;
                    }
                }
                else {
                    this.CurrentLangue = lang;
                }
            }
            return LanguageUtils[LanguageUtils.LanguageType[this.CurrentLangue]][key];
        };
        /**
         * 获取游戏语言类型
         */
        Language.prototype.GetLanguageType = function (gameID) {
            if (gameID === void 0) { gameID = 0; }
            var CurrentLangue;
            var storage = new Utils.Storage();
            var key = this.GetLanguageKey(gameID);
            var lang = storage.GetLocalStorage(key);
            if (!lang) {
                CurrentLangue = LanguageUtils.DefaultLanguage;
            }
            else if (typeof (lang) != "number") {
                if (lang == LanguageUtils.LanguageType[0]) {
                    CurrentLangue = LanguageUtils.LanguageType.CH;
                }
                else {
                    CurrentLangue = LanguageUtils.LanguageType.EN;
                }
            }
            else {
                CurrentLangue = lang;
            }
            return CurrentLangue;
        };
        /**
         * 获取游戏语言key，传入gameID,
         * @param gameID
         */
        Language.prototype.GetLanguageKey = function (gameID) {
            if (gameID === void 0) { gameID = 0; }
            return "Language-Cache-Key";
        };
        return Language;
    }());
    LanguageUtils.Language = Language;
})(LanguageUtils || (LanguageUtils = {}));
