"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Verification {
    /**
     * 验证密码 6-20位
     * @param password 密码
     */
    static Password(password) {
        let patt = new RegExp(/^[0-9a-zA-Z_]{6,20}$/);
        return patt.test(password);
    }
    /**
     * 验证手机号码
     * @param phoneNumber 手机号码
     */
    static PhoneNumber(phoneNumber) {
        let patt = new RegExp("/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/");
        return patt.test(phoneNumber);
    }
}
exports.default = Verification;
//# sourceMappingURL=Verification.js.map