/// <reference path="IAuthorization.ts"/>
/// <reference path="../../GameConfig.ts"/>
/// <reference path="../../Dto/AuthorizationDto.ts"/>
var CacheData;
(function (CacheData) {
    var Authorization = (function () {
        function Authorization() {
            this.authorization = null;
            this.cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;
        }
        /**
         * 获取用户缓存的key
         */
        Authorization.prototype.GetAuthorizationKey = function (gameID) {
            return "Authorization-" + gameID + "-Key";
        };
        /**
         * 获取会员授权信息
         */
        Authorization.prototype.GetAuthorization = function (gameID) {
            if (this.authorization) {
                return this.authorization;
            }
            var storage = new Utils.Storage();
            var key = this.GetAuthorizationKey(gameID);
            this.authorization = storage.Get(key, this.cacheType);
            return this.authorization;
        };
        /**
         * 设置授权信息
         * @param dto
         */
        Authorization.prototype.SetAuthorization = function (gameID, dto) {
            if (!this.authorization) {
                this.authorization = new BaseDto.AuthorizationDto();
            }
            this.authorization.Code = dto.Code !== undefined ? dto.Code : this.authorization.Code;
            this.authorization.SocketToken = dto.SocketToken !== undefined ? dto.SocketToken : this.authorization.SocketToken;
            this.authorization.Token = dto.Token !== undefined ? dto.Token : this.authorization.Token;
            this.authorization.IsMulti = dto.IsMulti !== undefined ? dto.IsMulti : this.authorization.IsMulti;
            this.authorization.Accounts = dto.Accounts !== undefined ? dto.Accounts : this.authorization.Accounts;
            var storage = new Utils.Storage();
            var key = this.GetAuthorizationKey(gameID);
            storage.Set(key, this.authorization, this.cacheType);
            return true;
        };
        return Authorization;
    }());
    Authorization.instance = new Authorization();
    CacheData.Authorization = Authorization;
})(CacheData || (CacheData = {}));
