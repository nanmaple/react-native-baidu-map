"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCodeExtends;
(function (ErrorCodeExtends) {
    /**
     * 分数错误
     */
    ErrorCodeExtends[ErrorCodeExtends["AmountError"] = 10000] = "AmountError";
    /**
     * 密码格式错误
     */
    ErrorCodeExtends[ErrorCodeExtends["PasswordFormatError"] = 10001] = "PasswordFormatError";
    /**
     * 账号已存在，无法修改
     */
    ErrorCodeExtends[ErrorCodeExtends["AccountExist"] = 10002] = "AccountExist";
    /**
     * 昵称格式错误
     */
    ErrorCodeExtends[ErrorCodeExtends["NicknameFormatError"] = 10003] = "NicknameFormatError";
    /**
     * 手机号码格式错误
     */
    ErrorCodeExtends[ErrorCodeExtends["PhoneNumberFormatError"] = 10004] = "PhoneNumberFormatError";
})(ErrorCodeExtends = exports.ErrorCodeExtends || (exports.ErrorCodeExtends = {}));
//# sourceMappingURL=ErrorCode.js.map