namespace LanguageUtils {
    export const EN = {
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
        /// <summary>
        /// IP受限
        /// </summary>
        IPLimited: "IP Limited",
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
        /// <summary>
        /// 账户登出
        /// </summary>
        AccountLoginOut: "Account Login Out",
        /// <summary>
        /// 正在连接
        /// </summary>
        ConnectService: "Connect Service...",
        
        /************************************/

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
         * 低于最小投注限额
         */
        LOW_LIMIT: "Low The Limit",
        /**
         * 超过最大投注限额
         */
        OVER_LIMIT: "Exceed The Quota",

        //投注结果信息提示
        /**
         * 球进了
         */
        GameSuccess: "Nice!",
        /**
         * 奖励金
         */
        GameReward: ", Congratulations on your award ",
        /**
         * 奖励倍数
         */
        GameMultiple: "times",
        /**
         * 未进球
         */
        GameFail: "I'm sorry, just a little, try it again!",

        /**
         * 选择最大筹码
         */
        MaxChip: "Max",

        //游戏规则内容
        GameRuleFirst: "1.Click the right or left toggle to select the numeric button or click the 'Max' button to confirm the amount of bet used.",
        GameRuleSecond: "2.The props can be used. A prop reduces a defender",
        GameRuleThird: "3.Sliding yellow path up and down, adjust the best shooting angle, get twice the result with half the effort.",
        GameRuleFour: "4.Click on 'shot' and go to the door.",

        GameTotalRule:"<p style='fontSize:30;font-weight:bold'>游戏简介</p>"+"<br/>",


        //游戏关注提示内容
        GameTips:"<p style='fontSize:35'>Since you haven't logged in yet, now it's a play mode, to experience more fun games, click on the top left</p>"+
        "<p style='fontSize:35;color:red'>&nbsp;'attention'&nbsp;</p>"+
        "<p style='fontSize:35'>button to log in.</p>",


    }
}