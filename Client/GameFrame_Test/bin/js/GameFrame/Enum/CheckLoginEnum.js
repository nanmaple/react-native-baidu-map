var BaseEnum;
(function (BaseEnum) {
    /**
     * 检测登录返回类型枚举
     */
    var CheckLoginEnum;
    (function (CheckLoginEnum) {
        /**
         * 会员信息
         */
        CheckLoginEnum[CheckLoginEnum["MemberInfo"] = 1] = "MemberInfo";
        /**
         * sockeToken
         */
        CheckLoginEnum[CheckLoginEnum["SocketToken"] = 2] = "SocketToken";
    })(CheckLoginEnum = BaseEnum.CheckLoginEnum || (BaseEnum.CheckLoginEnum = {}));
})(BaseEnum || (BaseEnum = {}));
//# sourceMappingURL=CheckLoginEnum.js.map