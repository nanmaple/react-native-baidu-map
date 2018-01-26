var BaseDto;
(function (BaseDto) {
    /**
     * 授权登录信息Dto
     */
    var MemberInfoDto = (function () {
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
    BaseDto.MemberInfoDto = MemberInfoDto;
})(BaseDto || (BaseDto = {}));
