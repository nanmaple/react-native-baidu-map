"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Language_1 = require("../../Cache/Language/Language");
class LanguageManager {
    /**
     * 获取当前语言
     */
    GetLanguage() {
        return Language_1.default.instance.GetLanguage();
    }
    SetLanguage(language) {
        return Language_1.default.instance.SetLanguage(language);
    }
}
exports.default = LanguageManager;
//# sourceMappingURL=LanguageManager.1.js.map