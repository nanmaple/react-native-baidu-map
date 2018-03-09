namespace LanguageUtils {
    export const EN = {
        in: "IN",
        out: "OUT",
        hit: "HIT",
        red: "Red",
        black: "Black",
        big: "Big",
        small: "Small",
        odd: "Odd",
        even: "Even",
        lout: "L Out",
        rout: "R Out",
        lhit: "L Hit",
        rhit: "R Hit",
        leftOut: "L Out",
        rightOut: "R Out",
        leftHit: "L Hit",
        rightHit: "R Hit",
        //投注信息提示
        betSuccess: "Bet Success",
        betFail: "Bet Fail",
        gameSuccess: "Guess Success",
        gameFail: "Guess Fail",
        Maximum: "Max",
        Minimum: "Min",
        /**
         * 成功
         */
        SUCCESS: "Success",
        /**
         * 赔率错误
         */
        ODDS_ERROR: "Odds Error",
        /**
         * 金额错误
         */
        AMOUNT_ERROR: "Amount Error",
        /**
         * 余额不足
         */
        BALANCE_SMALL: "Not Sufficient Funds",
        /**
         * 投注位置错误
         */
        BETPOS_ERROR: "Injection Position Error",
        /**
         * 不在投注状态
         */
        NOTBET_STATUS: "Not In The State Of Betting",
        /**
         * 超过投注限额
         */
        OVER_LIMIT: "Exceed The Quota",
        //局号面板投注状态信息（BetStatus）
        /**
         * 期号
         */
        Issue: "Issue:",
        /**
         * 等待开始
         */
        WaitStart: "Waiting",
        /**
         * 正在投注
         */        
        Betting: "Betting",
        /**
         * 停止投注
         */
        EndBet: "End Bet",
        /**
         * 正在结算
         */
        Settling: "Settling",
        /**
         * 已结算
         */
        HaveSettled: "Settled",

        //游戏结果进球提示
        /**
         * 球进啦
         */
        ShootIn: "Shoot In",
        /**
         * 左边射偏啦
         */
        ShootLeft: "Shoot Left",
        /**
         * 右边射偏啦
         */
        ShootRight: "Shoot Right",
        /**
         * 撞柱啦
         */
        ShootGoalPost: "Shoot GoalPost",
        /**
         * 左边撞柱啦
         */
        ShootLeftGoalPost: "Shoot Left GoalPost",
        /**
         * 右边撞柱啦
         */
        ShootRightGoalPost: "Shoot Right GoalPost",

        //游戏记录面板显示
        /**
         * 时间
         */
        Time: "Time",
        /**
         * 局号
         */
        Round: "Round",
        /**
         * 输赢
         */
        WinLose: "Win Lose",
        /**
         * 赢
         */
        Win: "Win",
        /**
         * 输
         */
        Lose: "Lose",
        /**
         * 投注详情如下
         */
        BetDetails: "Bet Details：",
        /**
         * 暂无投注记录
         */
        NoBetRecord: "No BetRecord",
        /**
         * 加载中
         */
        IsLoading: "IsLoading...",

        /// <summary>
        /// 系统错误
        /// </summary>
        SystemError: "System Error",
        /// <summary>
        /// 操作成功
        /// </summary>
        Success: "Success",
        /// <summary>
        /// 参数无效
        /// </summary>
        InvalidArgument: "Invalid Argument",

        // 登录错误码
        /// <summary>
        /// 会员已存在(注册新账号时)
        /// </summary>
        MemberExist: "Member Exist",
        /// <summary>
        /// 会员不存在
        /// </summary>
        MemberNotExist: "Member Not Exist",
        /// <summary>
        /// 会员被冻结
        /// </summary>
        MemberClosed: "Member Closed",
       

        //Token错误
        /// <summary>
        /// Token为空
        /// </summary>
        NullToken: "Null Token",
        /// <summary>
        /// 服务器时间差错误
        /// </summary>
        OverTime: "Over Time",
        /// <summary>
        /// token失效
        /// </summary>
        TokenInvalid: "Token Invalid",
        /// <summary>
        /// Token解密失败
        /// </summary>
        TokenDecodeError: "Token Decode Error",
        /// <summary>
        /// Signature签名错误
        /// </summary>
        SignatureError: "Signature Error",
        /// <summary>
        /// Playload参数错误
        /// </summary>
        PlayloadError: "Playload Error",
        /// <summary>
        /// 帐号无效
        /// </summary>
        AccountInvalid: "Account Invalid",
        /// <summary>
        /// 拒绝游客
        /// </summary>
        RefuseTourist: "Refuse Tourist",
        /// <summary>
        /// 解析的payload会员ID无效
        /// </summary>
        MemberIdInvalid: "MemberId Invalid",
       

        // 会员信息操作
        /// <summary>
        /// 账号已存在
        /// </summary>
        AccountExist: "Account Exist",
        /// <summary>
        /// 已设置过账号(只能设置一次)
        /// </summary>
        AccountHasBeenSetup: "Account Has BeenSetup",
        /// <summary>
        /// 已是代理
        /// </summary>
        AlreadyAgent: "Already Agent",
        /// <summary>
        /// 邮箱已存在
        /// </summary>
        EmailExist: "Email Exist",
        /// <summary>
        /// 密码错误(重置密码功能)
        /// </summary>
        ErrorPassword: "Error Password",
        /// <summary>
        /// 父级不能是自己
        /// </summary>
        ParentCanNotBeSelf: "Parent Can Not BeSelf",
        /// <summary>
        /// 手机号已存在(设置手机号)
        /// </summary>
        PhoneNumberExist: "PhoneNumber Exist",
        /// <summary>
        /// 邮箱与之前的相同(重置邮箱时)
        /// </summary>
        SameEmail: "Same Email",
        /// <summary>
        /// 密码与之前设置的相同(重置密码时)
        /// </summary>
        SamePassword: "Same Password",
        /// <summary>
        /// 手机号与之前设置的相同(重新设置手机号时)
        /// </summary>
        SamePhoneNumber: "Same PhoneNumber",
        /// <summary>
        /// 邮箱格式错误
        /// </summary>
        WrongEmail: "Wrong Email",
        /// <summary>
        /// 手机号格式错误
        /// </summary>
        WrongPhoneNumber: "Wrong PhoneNumber",
        /// <summary>
        /// 父子级关系不存在
        /// </summary>
        AgencyRelationshipNotExist: "Agency Relationship Not Exist",

        // 进取分错误
        /// <summary>
        /// 修改会员分数失败
        /// </summary>
        ModifyMemberScoreFailed: "Modify Member Score Failed",
        /// <summary>
        /// 修改会员的父级会员分数失败
        /// </summary>
        ModifyParentScoreFailed: "Modify Parent Score Failed",
    }
}