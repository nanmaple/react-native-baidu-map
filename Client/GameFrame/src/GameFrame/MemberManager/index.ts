/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />

namespace MemberManager {
    /**
     * 会员信息管理
     */
    export class Member implements IMemberManager {
        //存储
        private storage = new Utils.Storage();
        //授权key
        private authorizationKey = 'Authorization-CacheKey';
        //会员信息key
        private memberInfoKey = 'UserInfo-CacheKey';
        //存储类型
        private cacheType = Utils.StorageType.LOCALSTORAGE;

        constructor() {

        }

        /**
         * 登出
         */
        public Logout(): boolean {
            //清除缓存中的信息
            this.storage.Set(this.authorizationKey, "", this.cacheType, 0);
            this.storage.Set(this.memberInfoKey, "", this.cacheType, 0);
            return true;
        }

        /**
         * 获取会员信息
         */
        public GetMemberInfo(): GameDto.MemberInfoDto {
            //从缓存中获取会员信息
            let memberInfoDto: GameDto.MemberInfoDto = <GameDto.MemberInfoDto>this.storage.Get(this.memberInfoKey);
            return memberInfoDto;
        };

        
        /**
         * 获取授权信息
         */
        public GetAuthorization(): GameDto.AuthorizationDto {
            //从缓存中获取授权信息
            let authorizationDto: GameDto.AuthorizationDto = <GameDto.AuthorizationDto>this.storage.Get(this.authorizationKey);
            return authorizationDto;
        };
    }
}