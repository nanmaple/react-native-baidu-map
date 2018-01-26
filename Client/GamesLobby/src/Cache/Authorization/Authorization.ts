/// <reference path="IAuthorization.ts"/>
/// <reference path="../../GameConfig.ts"/>
/// <reference path="../../Dto/AuthorizationDto.ts"/>
namespace CacheData {
    export class Authorization implements IAuthorization { 
        static readonly instance = new Authorization();
        private authorization: BaseDto.AuthorizationDto = null;
        private cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;

        /**
         * 获取用户缓存的key
         */
        private GetAuthorizationKey(gameID: number): string {
            return `Authorization-${gameID}-Key`;
        }

        /**
         * 获取会员授权信息
         */
        public GetAuthorization(gameID: number): BaseDto.AuthorizationDto {
            if (this.authorization) {
                return this.authorization;
            }

            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetAuthorizationKey(gameID);
            this.authorization = <BaseDto.AuthorizationDto>storage.Get(key,this.cacheType);
            return this.authorization;
        }

        /**
         * 设置授权信息
         * @param dto 
         */
        public SetAuthorization(gameID: number, dto: BaseDto.AuthorizationDto): boolean {
            if (!this.authorization) {
                this.authorization = new BaseDto.AuthorizationDto();
            }
            this.authorization.Code = dto.Code !== undefined ? dto.Code : this.authorization.Code;
            this.authorization.SocketToken = dto.SocketToken !== undefined ? dto.SocketToken : this.authorization.SocketToken;
            this.authorization.Token = dto.Token !== undefined ? dto.Token : this.authorization.Token;
            this.authorization.IsMulti = dto.IsMulti !== undefined ? dto.IsMulti : this.authorization.IsMulti;
            this.authorization.Accounts = dto.Accounts !== undefined ? dto.Accounts : this.authorization.Accounts;
            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetAuthorizationKey(gameID);
            storage.Set(key, this.authorization,this.cacheType);
            return true;
        }
    }
} 