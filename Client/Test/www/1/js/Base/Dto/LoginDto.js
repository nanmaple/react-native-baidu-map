var BaseDto;
(function (BaseDto) {
    /**
     * 登录参数Token
     */
    var LoginDto = /** @class */ (function () {
        function LoginDto() {
            /**
             * 设备号
             */
            this.DeviceId = "123456";
            /**
             * 设备号
             */
            this.DeviceType = "MOBILE";
        }
        return LoginDto;
    }());
    BaseDto.LoginDto = LoginDto;
    /**
     * 登录成功返回结果Dto
     */
    var LoginSuccessDto = /** @class */ (function () {
        function LoginSuccessDto() {
            /**
             * 分数
             */
            this.Score = null;
        }
        return LoginSuccessDto;
    }());
    BaseDto.LoginSuccessDto = LoginSuccessDto;
    /**
     * 登录成功，但有多账号结果Dto
     */
    var LoginMultiAccountDto = /** @class */ (function () {
        function LoginMultiAccountDto() {
        }
        return LoginMultiAccountDto;
    }());
    BaseDto.LoginMultiAccountDto = LoginMultiAccountDto;
    var ResultEnum;
    (function (ResultEnum) {
        /**
         * 错误
         */
        ResultEnum[ResultEnum["ERROR"] = 0] = "ERROR";
        /**
         * 登录成功
         */
        ResultEnum[ResultEnum["LOGIN"] = 1] = "LOGIN";
        /**
         * 多账号
         */
        ResultEnum[ResultEnum["MULTI"] = 2] = "MULTI";
        /**
         * 未登录，游客
         */
        ResultEnum[ResultEnum["NO"] = 3] = "NO";
    })(ResultEnum = BaseDto.ResultEnum || (BaseDto.ResultEnum = {}));
    /**
     * 登录结果
     */
    var LoginResultDto = /** @class */ (function () {
        function LoginResultDto() {
        }
        return LoginResultDto;
    }());
    BaseDto.LoginResultDto = LoginResultDto;
})(BaseDto || (BaseDto = {}));
