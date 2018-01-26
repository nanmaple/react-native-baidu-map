"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LanguageType_1 = require("../../Enum/LanguageType");
const Storage_1 = require("../../Utils/Storage");
class Language {
    constructor() {
        this.cacheType = Storage_1.StorageType.LOCALSTORAGE;
        let key = this.GetLanguageKey();
        let storage = new Storage_1.Storage();
        this.language = storage.Get(key, this.cacheType);
        if (this.language == null) {
            this.language = LanguageType_1.LanguageType.CH;
        }
    }
    /**
     * 获取用户缓存的key
     */
    GetLanguageKey() {
        return `language-cache-key`;
    }
    /**
     * 获取语言
     */
    GetLanguage() {
        return this.language;
    }
    ;
    /**
     * 设置语言
     * @param language
     */
    SetLanguage(language) {
        this.language = language;
        let storage = new Storage_1.Storage();
        let key = this.GetLanguageKey();
        storage.Set(key, language, this.cacheType);
        return true;
    }
}
Language.instance = new Language();
exports.default = Language;
//# sourceMappingURL=Language.js.map