var BaseDto;
(function (BaseDto) {
    /**
     * 授权登录信息Dto
     */
    var AuthorizationDto = /** @class */ (function () {
        function AuthorizationDto() {
            /**
             * Token
             */
            this.Token = "";
            /**
             * 游戏token
             */
            this.SocketToken = "";
            /**
             * 微信Code
             */
            this.Code = null;
            /**
             * 账号是否关闭
             */
            this.IsClose = true;
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
