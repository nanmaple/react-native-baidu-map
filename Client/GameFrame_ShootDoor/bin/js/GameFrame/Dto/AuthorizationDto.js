var GameDto;
(function (GameDto) {
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
    GameDto.AuthorizationDto = AuthorizationDto;
})(GameDto || (GameDto = {}));
//# sourceMappingURL=AuthorizationDto.js.map