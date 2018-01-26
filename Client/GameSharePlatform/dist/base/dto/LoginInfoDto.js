"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginParamsDto {
    constructor() {
        /**
         * 设备号
         */
        this.DeviceId = "123456";
        /**
         * 设备号
         */
        this.DeviceType = "MOBILE";
    }
}
exports.LoginParamsDto = LoginParamsDto;
/**
 * 通过Code登录
 */
class LoginByCodeDto extends LoginParamsDto {
}
exports.LoginByCodeDto = LoginByCodeDto;
/**
 * 通过Code登录
 */
class LoginByIdDto extends LoginParamsDto {
}
exports.LoginByIdDto = LoginByIdDto;
/**
 * 登录参数Token
 */
class LoginDto extends LoginParamsDto {
}
exports.LoginDto = LoginDto;
/**
 * 登录成功返回结果Dto
 */
class LoginSuccessDto {
}
exports.LoginSuccessDto = LoginSuccessDto;
/**
 * 登录成功，但有多账号结果Dto
 */
class LoginMultiAccountDto {
}
exports.LoginMultiAccountDto = LoginMultiAccountDto;
var ResultEnum;
(function (ResultEnum) {
    /**
     * 错误
     */
    ResultEnum[ResultEnum["ERROR"] = 0] = "ERROR";
    /**
     * 登录成功
     */
    ResultEnum[ResultEnum["LOGIN"] = 1] = "LOGIN";
    /**
     * 多账号
     */
    ResultEnum[ResultEnum["MULTI"] = 2] = "MULTI";
    /**
     * 未登录，游客
     */
    ResultEnum[ResultEnum["NO"] = 3] = "NO";
})(ResultEnum = exports.ResultEnum || (exports.ResultEnum = {}));
/**
 * 登录结果
 */
class LoginResultDto {
}
exports.LoginResultDto = LoginResultDto;
//# sourceMappingURL=LoginInfoDto.js.map