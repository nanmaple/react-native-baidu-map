"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Language_1 = require("../../Cache/Language/Language");
const LanguageType_1 = require("../../Enum/LanguageType");
const ErrorCode_1 = require("../../Enum/ErrorCode");
const CH_1 = require("./CH");
class LanguageManager {
    constructor() {
    }
    /**
     * 获取当前语言
     */
    GetLanguage() {
        return Language_1.default.instance.GetLanguage();
    }
    /**
     *
     * @param language 设置语言
     */
    SetLanguage(language) {
        return Language_1.default.instance.SetLanguage(language);
    }
    /**
     * 解析错误码
     * @param errorCode 错误码
     */
    GetErrorMsg(errorCode) {
        if (!ErrorCode_1.ErrorCode.hasOwnProperty(errorCode) || typeof errorCode === "string") {
            return errorCode.toString();
        }
        let language = Language_1.default.instance.GetLanguage();
        switch (language) {
            case LanguageType_1.LanguageType.CH:
                return CH_1.default[ErrorCode_1.ErrorCode[errorCode]];
            default:
                return errorCode.toString();
        }
    }
}
exports.default = LanguageManager;
//# sourceMappingURL=LanguageManager.js.map