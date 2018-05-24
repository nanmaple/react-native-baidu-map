/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />
var MemberManager;
(function (MemberManager) {
    /**
     * 会员信息管理
     */
    var Member = /** @class */ (function () {
        function Member() {
            //存储
            this.storage = new Utils.Storage();
            //授权key
            this.authorizationKey = 'Authorization-CacheKey';
            //会员信息key
            this.memberInfoKey = 'UserInfo-CacheKey';
            //存储类型
            this.cacheType = Utils.StorageType.LOCALSTORAGE;
        }
        /**
         * 登出
         */
        Member.prototype.Logout = function () {
            //清除缓存中的信息
            this.storage.Set(this.authorizationKey, "", this.cacheType, 0);
            this.storage.Set(this.memberInfoKey, "", this.cacheType, 0);
            return true;
        };
        /**
         * 获取会员信息
         */
        Member.prototype.GetMemberInfo = function () {
            //从缓存中获取会员信息
            var memberInfoDto = this.storage.Get(this.memberInfoKey);
            return memberInfoDto;
        };
        ;
        /**
         * 获取授权信息
         */
        Member.prototype.GetAuthorization = function () {
            //从缓存中获取授权信息
            var authorizationDto = this.storage.Get(this.authorizationKey);
            return authorizationDto;
        };
        ;
        return Member;
    }());
    MemberManager.Member = Member;
})(MemberManager || (MemberManager = {}));
//# sourceMappingURL=index.js.map