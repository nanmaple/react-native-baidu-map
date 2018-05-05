/// <reference path="IMemberInfo.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
namespace BaseCache {
    export class MemberInfo implements IMemberInfo {
        static readonly instance = new MemberInfo();
        private memberInfo: BaseDto.MemberInfoDto = null;
        private cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;

        /**
         * 获取用户缓存的key
         */
        private GetMemberInfoKey(gameID: number): string {
            return `UserInfo-CacheKey`;
        }
        /**
         * 获取会员授权信息
         */
        public GetMemberInfo(gameID: number): BaseDto.MemberInfoDto {
            if (this.memberInfo) {
                return this.memberInfo;
            }

            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetMemberInfoKey(gameID);
            this.memberInfo = <BaseDto.MemberInfoDto>storage.Get(key,this.cacheType);
            return this.memberInfo;
        }

        /**
         * 设置授权信息
         * @param dto 
         */
        public SetMemberInfo(gameID: number, dto: BaseDto.MemberInfoDto,day?:number): boolean {
            if (!this.memberInfo) {
                this.memberInfo = new BaseDto.MemberInfoDto();
            }
            this.memberInfo.Account = dto.Account !== undefined ? dto.Account : this.memberInfo.Account;
            this.memberInfo.HeadImageUrl = dto.HeadImageUrl !== undefined ? dto.HeadImageUrl : this.memberInfo.HeadImageUrl;
            this.memberInfo.Nickname = dto.Nickname !== undefined ? dto.Nickname : this.memberInfo.Nickname;
            this.memberInfo.Score = dto.Score !== undefined ? dto.Score : this.memberInfo.Score;
            this.memberInfo.MemberId = dto.MemberId !== undefined ? dto.MemberId : this.memberInfo.MemberId;
            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetMemberInfoKey(gameID);
            storage.Set(key, this.memberInfo,this.cacheType,day);
            return true;
        }

    }
} 