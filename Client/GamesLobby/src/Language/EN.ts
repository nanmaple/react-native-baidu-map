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
        //局号面板投注状态信息（BetStatus）
        /**
         * 期号
         */
        Issue: "Issue:",
        /**
         * 等待开始
         */
        WaitStart: "Waiting Start",
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
        HaveSettled: "Having Settled",

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
        NoBetRecord: "No Bet Record",
        /**
         * 加载中
         */
        IsLoading: "IsLoading...",

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

        Login: "Loading...",
        Agent: "Recommender:",
        AgentTitle:"Choose your Recommender",
        LoginError: "Login Error",
        NoLogin: "No Login"
    }
}