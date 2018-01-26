"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiAccountDto {
}
exports.MultiAccountDto = MultiAccountDto;
/**
 * 授权登录信息Dto
 */
class AuthorizationDto {
    constructor() {
        /**
         * Token
         */
        this.Token = "";
        /**
         * 游戏token
         */
        this.SocketToken = "";
        /**
         * 微信Code
         */
        this.Code = null;
        /**
         * 账号是否关闭
         */
        this.IsClose = false;
        /**
         * 是否多账号
         */
        this.IsMulti = false;
    }
}
exports.AuthorizationDto = AuthorizationDto;
//# sourceMappingURL=AuthorizationDto.js.map