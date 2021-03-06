/// <reference path="IMemberInfo.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
var BaseCache;
(function (BaseCache) {
    var MemberInfo = /** @class */ (function () {
        function MemberInfo() {
            this.memberInfo = null;
            this.cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;
        }
        /**
         * 获取用户缓存的key
         */
        MemberInfo.prototype.GetMemberInfoKey = function (gameID) {
            return "UserInfo-CacheKey";
        };
        /**
         * 获取会员授权信息
         */
        MemberInfo.prototype.GetMemberInfo = function (gameID) {
            if (this.memberInfo) {
                return this.memberInfo;
            }
            var storage = new Utils.Storage();
            var key = this.GetMemberInfoKey(gameID);
            this.memberInfo = storage.Get(key, this.cacheType);
            return this.memberInfo;
        };
        /**
         * 设置授权信息
         * @param dto
         */
        MemberInfo.prototype.SetMemberInfo = function (gameID, dto, day) {
            if (!this.memberInfo) {
                this.memberInfo = new BaseDto.MemberInfoDto();
            }
            this.memberInfo.Account = dto.Account !== undefined ? dto.Account : this.memberInfo.Account;
            this.memberInfo.HeadImageUrl = dto.HeadImageUrl !== undefined ? dto.HeadImageUrl : this.memberInfo.HeadImageUrl;
            this.memberInfo.Nickname = dto.Nickname !== undefined ? dto.Nickname : this.memberInfo.Nickname;
            this.memberInfo.Score = dto.Score !== undefined ? dto.Score : this.memberInfo.Score;
            this.memberInfo.MemberId = dto.MemberId !== undefined ? dto.MemberId : this.memberInfo.MemberId;
            var storage = new Utils.Storage();
            var key = this.GetMemberInfoKey(gameID);
            storage.Set(key, this.memberInfo, this.cacheType, day);
            return true;
        };
        MemberInfo.instance = new MemberInfo();
        return MemberInfo;
    }());
    BaseCache.MemberInfo = MemberInfo;
})(BaseCache || (BaseCache = {}));
