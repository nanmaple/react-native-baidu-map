/**
 * 多语言配置-英文配置
 */
var LanguageUtils;
(function (LanguageUtils) {
    LanguageUtils.EN = {
        //↓↓↓↓无需修改↓↓↓↓
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
        //↑↑↑↑无需修改↑↑↑↑
        /**
          * 余额不足
          */
        BalanceSmall: "Not Sufficient Funds",
        /**
         * 低于最小投注限额
         */
        LowLimit: "Low Limit",
        /**
         * 超过最大投注限额
         */
        OverLimit: "Over Limit",
        /**
         * 记录序号标题
         */
        RecordNumTitle: "Num",
        /**
         * 记录奖励标题
         */
        RecordRewardTitle: "Reward",
        /**
         * 记录时间标题
         */
        RecordTimeTitle: "Time",
        /**
         * 记录暂无数据
         */
        NoRecordData: "No Record",
        /**
         * 记录正在加载中
         */
        IsLoading: "IsLoading...",
        /**
         * 游戏总的规则说明
         */
        GameTotalRule: "<p style='fontSize:30;font-weight:bold;color:#f6ef45'>Player Rule</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>1.After choosing the amount of the injection, adjust the shooting angle;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>2.Using a prop can reduce a defender and can use up to three kinds of props. The amount of props varies according to the proportion of the amount of betting, and the amount of props displayed when the user shoots.;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>3.Click on 'shot' to kick the ball;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>4.Users can get 1.5, 2, 5, 10 times reward after scoring;</p>" + "<br/>",
        /******游戏刮奖区多语言******/
        /**
         * 第1层
         */
        Level1: "Level 1",
        /**
         * 第2层
         */
        Level2: "Level 2",
        /**
         * 第3层
         */
        Level3: "Level 3",
        /**
         * 第4层
         */
        Level4: "Level 4",
        /**
         * 第5层
         */
        Level5: "Level 5",
        /**
         * 第6层
         */
        Level6: "Level 6",
        /**
         * 第7层
         */
        Level7: "Level 7",
        /**
         * 游戏一标题
         */
        RuleOneTitle: "Game One",
        /**
         * 游戏一内容
         */
        RuleOneContent: "In the seven row mahjong of the left column, mahjong symbols of any level appear in my mahjong area, that is, the multiple reward of the layer.",
        /**
         * 游戏二标题
         */
        RuleTwoTitle: "Game Two",
        /**
         * 游戏一内容
         */
        RuleTwoContent: "Scrape out the same multiple of 3 or more points, that is, the reward of the multiple.",
        /**
         * 我的麻将
         */
        MyMahjong: "My mahjong",
        /**
         * 游戏一开奖区说明
         */
        Game1ResExplain: "There are eight different mahjong symbols in the scraping zone",
        /******游戏投注部分多语言切换******/
        /**
         * 最大金额投注
         */
        Maxbet: "Max",
        /**
         * 开始刮
         */
        StartScrape: "Start Scrape",
        /**
         * 兑奖
         */
        StartCash: "Cash",
        /**
         * 再刮一次
         */
        ScrapeAgain: "Scrape Again",
        /******游戏图片多语言切换******/
        /**
         * 游戏头部标题皮肤
         */
        HeadTitleSkin: "ui/header/head_tit.png",
        /**
         * 游戏规则头部皮肤
         */
        RuleTitleSkin: "ui/rule/rule_title.png",
        /**
         * 游戏记录头部标题皮肤
         */
        RecordTitleSkin: "ui/record_tit.png",
    };
})(LanguageUtils || (LanguageUtils = {}));
//# sourceMappingURL=EN.js.map