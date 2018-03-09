var LanguageUtils;
(function (LanguageUtils) {
    LanguageUtils.EN = {
        in: "IN",
        out: "OUT",
        hit: "HIT",
        red: "Red",
        black: "Black",
        big: "Big",
        small: "Small",
        odd: "Odd",
        even: "Even",
        lout: "Lout",
        rout: "Rout",
        lhit: "Lhit",
        rhit: "Rhit",
        leftOut: "LeftOut",
        rightOut: "RightOut",
        leftHit: "LeftHit",
        rightHit: "RightHit",
        //投注信息
        betSuccess: "Bet-Success",
        betFail: "Bet-Fail",
        gameSuccess: "Guess-Success",
        gameFail: "Guess-Fail",
        Maximum: "Maximum",
        Minimum: "Minimum",
        /**
         * 成功
         */
        SUCCESS: "Success",
        /**
         * 赔率错误
         */
        ODDS_ERROR: "Odds error",
        /**
         * 金额错误
         */
        AMOUNT_ERROR: "Amount error",
        /**
         * 余额不足
         */
        BALANCE_SMALL: "Not sufficient funds",
        /**
         * 投注位置错误
         */
        BETPOS_ERROR: "Injection position error",
        /**
         * 不在投注状态
         */
        NOTBET_STATUS: "Not in the state of betting",
        /**
         * 超过投注限额
         */
        OVER_LIMIT: "Exceed the quota",
        //投注状态信息（BetStatus）
        /**
         * 期号
         */
        Issue: "期号",
        /**
         * 等待开始
         */
        WaitStart: "等待开始",
        /**
         * 正在投注
         */
        Betting: "正在投注",
        /**
         * 停止投注
         */
        EndBet: "停止投注",
        /**
         * 正在结算
         */
        Settling: "正在结算",
        /**
         * 已结算
         */
        HaveSettled: "已结算",
        /// <summary>
        /// 系统错误
        /// </summary>
        SystemError: "系统错误",
        /// <summary>
        /// 操作成功
        /// </summary>
        Success: "操作成功",
        /// <summary>
        /// 参数无效
        /// </summary>
        InvalidArgument: "参数无效",
        // 登录错误码
        /// <summary>
        /// 会员已存在(注册新账号时)
        /// </summary>
        MemberExist: "会员已存在",
        /// <summary>
        /// 会员不存在
        /// </summary>
        MemberNotExist: "会员不存在",
        /// <summary>
        /// 会员被冻结
        /// </summary>
        MemberClosed: "会员被冻结",
        //Token错误
        /// <summary>
        /// Token为空
        /// </summary>
        NullToken: "Token为空",
        /// <summary>
        /// 服务器时间差错误
        /// </summary>
        OverTime: "服务器时间差错误",
        /// <summary>
        /// token失效
        /// </summary>
        TokenInvalid: "token失效",
        /// <summary>
        /// Token解密失败
        /// </summary>
        TokenDecodeError: "Token解密失败",
        /// <summary>
        /// Signature签名错误
        /// </summary>
        SignatureError: "Signature签名错误",
        /// <summary>
        /// Playload参数错误
        /// </summary>
        PlayloadError: "Playload参数错误",
        /// <summary>
        /// 帐号无效
        /// </summary>
        AccountInvalid: "帐号无效",
        /// <summary>
        /// 拒绝游客
        /// </summary>
        RefuseTourist: "拒绝游客",
        /// <summary>
        /// 解析的payload会员ID无效
        /// </summary>
        MemberIdInvalid: "解析的payload会员ID无效",
        // 会员信息操作
        /// <summary>
        /// 账号已存在
        /// </summary>
        AccountExist: "账号已存在",
        /// <summary>
        /// 已设置过账号(只能设置一次)
        /// </summary>
        AccountHasBeenSetup: "已设置过账号",
        /// <summary>
        /// 已是代理
        /// </summary>
        AlreadyAgent: "已是代理",
        /// <summary>
        /// 邮箱已存在
        /// </summary>
        EmailExist: "邮箱已存在",
        /// <summary>
        /// 密码错误(重置密码功能)
        /// </summary>
        ErrorPassword: "密码错误",
        /// <summary>
        /// 父级不能是自己
        /// </summary>
        ParentCanNotBeSelf: "父级不能是自己",
        /// <summary>
        /// 手机号已存在(设置手机号)
        /// </summary>
        PhoneNumberExist: "手机号已存在",
        /// <summary>
        /// 邮箱与之前的相同(重置邮箱时)
        /// </summary>
        SameEmail: "邮箱与之前的相同",
        /// <summary>
        /// 密码与之前设置的相同(重置密码时)
        /// </summary>
        SamePassword: "密码与之前设置的相同",
        /// <summary>
        /// 手机号与之前设置的相同(重新设置手机号时)
        /// </summary>
        SamePhoneNumber: "手机号与之前设置的相同",
        /// <summary>
        /// 邮箱格式错误
        /// </summary>
        WrongEmail: "邮箱格式错误",
        /// <summary>
        /// 手机号格式错误
        /// </summary>
        WrongPhoneNumber: "手机号格式错误",
        /// <summary>
        /// 父子级关系不存在
        /// </summary>
        AgencyRelationshipNotExist: "父子级关系不存在",
        // 进取分错误
        /// <summary>
        /// 修改会员分数失败
        /// </summary>
        ModifyMemberScoreFailed: "修改会员分数失败",
        /// <summary>
        /// 修改会员的父级会员分数失败
        /// </summary>
        ModifyParentScoreFailed: "修改会员的父级会员分数失败",
    };
})(LanguageUtils || (LanguageUtils = {}));
