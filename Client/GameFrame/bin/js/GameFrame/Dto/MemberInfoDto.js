var GameDto;
(function (GameDto) {
    /**
     * 授权登录信息Dto
     */
    var MemberInfoDto = /** @class */ (function () {
        function MemberInfoDto() {
            /**
             * 昵称
             */
            this.Nickname = "";
            /**
             * 分数
             */
            this.Score = null;
            /**
             * 头像
             */
            this.HeadImageUrl = "";
        }
        return MemberInfoDto;
    }());
    GameDto.MemberInfoDto = MemberInfoDto;
})(GameDto || (GameDto = {}));
//# sourceMappingURL=MemberInfoDto.js.map