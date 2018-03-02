var BaseDto;
(function (BaseDto) {
    var MultiAccountDto = (function () {
        function MultiAccountDto() {
        }
        return MultiAccountDto;
    }());
    BaseDto.MultiAccountDto = MultiAccountDto;
    /**
     * 授权登录信息Dto
     */
    var AuthorizationDto = (function () {
        function AuthorizationDto() {
            /**
             * Token
             */
            this.Token = "";
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
            /**
             * 是否是游客
             */
            this.IsTourists = true;
        }
        return AuthorizationDto;
    }());
    BaseDto.AuthorizationDto = AuthorizationDto;
})(BaseDto || (BaseDto = {}));
