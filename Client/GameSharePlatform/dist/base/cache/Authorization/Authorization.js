"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Storage_1 = require("../../Utils/Storage");
const AuthorizationDto_1 = require("../../Dto/AuthorizationDto");
class Authorization {
    constructor() {
        this.authorization = null;
        this.cacheType = Storage_1.StorageType.LOCALSTORAGE;
    }
    /**
     * 获取用户缓存的key
     */
    GetAuthorizationKey() {
        return `Authorization-Key`;
    }
    /**
     * 获取会员授权信息
     */
    GetAuthorization() {
        if (this.authorization) {
            return this.authorization;
        }
        let storage = new Storage_1.Storage();
        let key = this.GetAuthorizationKey();
        this.authorization = storage.Get(key, this.cacheType);
        return this.authorization;
    }
    /**
     * 设置授权信息
     * @param dto
     */
    SetAuthorization(dto) {
        if (!this.authorization) {
            this.authorization = new AuthorizationDto_1.AuthorizationDto();
        }
        this.authorization.Code = dto.Code ? dto.Code : this.authorization.Code;
        this.authorization.SocketToken = dto.SocketToken !== undefined ? dto.SocketToken : this.authorization.SocketToken;
        this.authorization.Token = dto.Token !== undefined ? dto.Token : this.authorization.Token;
        this.authorization.IsMulti = dto.IsMulti !== undefined ? dto.IsMulti : this.authorization.IsMulti;
        this.authorization.Accounts = dto.Accounts !== undefined ? dto.Accounts : this.authorization.Accounts;
        let storage = new Storage_1.Storage();
        let key = this.GetAuthorizationKey();
        storage.Set(key, this.authorization, this.cacheType);
        return true;
    }
    /**
     * 清除用户数据
     */
    ClearAuthorization() {
        this.authorization = null;
        let key = this.GetAuthorizationKey();
        let storage = new Storage_1.Storage();
        storage.Set(key, null, this.cacheType);
    }
}
Authorization.instance = new Authorization();
exports.default = Authorization;
//# sourceMappingURL=Authorization.js.map