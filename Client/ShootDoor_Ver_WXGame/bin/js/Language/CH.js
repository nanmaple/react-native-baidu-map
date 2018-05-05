var LanguageUtils;
(function (LanguageUtils) {
    LanguageUtils.CH = {
        in: "射进",
        out: "射偏",
        hit: "撞柱",
        red: "红",
        black: "黑",
        big: "大",
        small: "小",
        odd: "单",
        even: "双",
        lout: "左偏",
        rout: "右偏",
        lhit: "左撞",
        rhit: "右撞",
        leftOut: "左偏",
        rightOut: "右偏",
        leftHit: "左撞",
        rightHit: "右撞",
        //投注信息提示
        betSuccess: "投注成功",
        betFail: "投注失败",
        gameSuccess: "有猜中哦",
        gameFail: "很遗憾，再接再厉",
        Maximum: "最大",
        Minimum: "最小",
        /**
         * 成功
         */
        SUCCESS: "成功",
        /**
         * 赔率错误
         */
        ODDS_ERROR: "赔率错误",
        /**
         * 金额错误
         */
        AMOUNT_ERROR: "金额错误",
        /**
         * 余额不足
         */
        BALANCE_SMALL: "余额不足",
        /**
         * 投注位置错误
         */
        BETPOS_ERROR: "投注位置错误",
        /**
         * 不在投注状态
         */
        NOTBET_STATUS: "不在投注状态",
        /**
         * 超过投注限额
         */
        OVER_LIMIT: "超过投注限额",
        //局号面板投注状态信息（BetStatus）
        /**
         * 期号
         */
        Issue: "期号:",
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
        //游戏结果进球提示
        /**
         * 球进啦
         */
        ShootIn: "球进啦",
        /**
         * 左边射偏啦
         */
        ShootLeft: "左边射偏啦",
        /**
         * 右边射偏啦
         */
        ShootRight: "右边射偏啦",
        /**
         * 撞柱啦
         */
        ShootGoalPost: "撞柱啦",
        /**
         * 左边撞柱啦
         */
        ShootLeftGoalPost: "左边撞柱啦",
        /**
         * 右边撞柱啦
         */
        ShootRightGoalPost: "右边撞柱啦",
        //游戏记录面板显示
        /**
         * 时间
         */
        Time: "时间",
        /**
         * 局号
         */
        Round: "局号",
        /**
         * 输赢
         */
        WinLose: "输赢",
        /**
         * 赢
         */
        Win: "赢",
        /**
         * 输
         */
        Lose: "输",
        /**
         * 投注详情如下
         */
        BetDetails: "投注详情如下：",
        /**
         * 暂无投注记录
         */
        NoBetRecord: "暂无投注记录",
        /**
         * 加载中
         */
        IsLoading: "加载中...",
        //头部显示测试
        Test: "测试",
        //头部显示账号
        Account: "账号:",
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
        /// <summary>
        /// IP受限
        /// </summary>
        IPLimited: "IP受限",
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
        //游戏关注提示内容
        GameTips: "<p style='fontSize:35'>由于您还没有登录，现在是试玩模式，想要体验更多游戏乐趣，请点击左上方</p>" +
            "<p style='fontSize:35;color:red'>&nbsp;'关注'&nbsp;</p>" +
            "<p style='fontSize:35'>按钮，即可登录。</p>",
        //游戏规则内容
        GameRule: "<p style='fontSize:30;font-weight:bold'>游戏简介</p>" + "<br/>" +
            "<p style='fontSize:25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;射龙门属于智力小游戏，玩家可以通过扑克牌出现的概率来选择下注位置，从而得到相应的分数作为奖励。</p>" + "<br/>" +
            "<p style='fontSize:25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每一局游戏开始时，系统从52张牌中随机抽取三张牌，第一张作为左门柱，第二张作为球，第三张作为右门柱。玩家猜球牌的位置，猜中位置得到相应赔率的分数奖励。</p>" + "<br/>" +
            "<p style='fontSize:30;font-weight:bold'>玩法说明</p>" + "<br/>" +
            "<p style='fontSize:25'>1.游戏下注时间为30秒。</p>" + "<br/>" +
            "<p style='fontSize:25'>2.扑克点数，“A”为1点，“J”为11点，“Q”为12点，“K”为13点，其它按扑克牌面数字作为点数。</p>" + "<br/>" +
            "<p style='fontSize:25'>3.大小、单双、红黑为固定赔率1.97，其它玩法根据概率动态生成赔率，此赔率包含本金。</p>" + "<br/>" +
            "<p style='fontSize:25'>4.玩家自行选择下注位置进行下注。</p>" + "<br/>" +
            "<p style='fontSize:25'>5.大小单双在第二张牌点数为7时，结果为和，退还大小单双位置的所有投注金额。</p>" + "<br/>" +
            "<p style='fontSize:30;font-weight:bold'>输赢说明</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>射进</p>" + "<br/>" +
            "<p style='fontSize:25'>球的点数在左门柱和右门柱点数之间（不包含左门柱和右门柱，不论顺序）算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为4、5算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为4、5算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>射偏</p>" + "<br/>" +
            "<p style='fontSize:25'>球的点数在左门柱和右门柱点数之外（不包含左门柱和右门柱，不论顺序）算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为1（A）、2、7、8、9、10、11（J）、12（Q）、13（K）算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为1（A）、2、7、8、9、10、11（J）、12（Q）、13（K）算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>左偏</p>" + "<br/>" +
            "<p style='fontSize:25'>在射偏的规则之上，球的点数要在左门柱点数之外（和大小顺序有关）算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为1（A）、2算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为7、8、9、10、11（J）、12（Q）、13（K）算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>右偏</p>" + "<br/>" +
            "<p style='fontSize:25'>在射偏的规则之上，球的点数要在右门柱点数之外（和大小顺序有关）算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为7、8、9、10、11（J）、12（Q）、13（K）算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为1（A）、2算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>撞柱</p>" + "<br/>" +
            "<p style='fontSize:25'>球点数等于左门柱点数或者右门柱点数（不论顺序）算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为3、6算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为3、6算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>左撞柱</p>" + "<br/>" +
            "<p style='fontSize:25'>在撞柱的规则之上，球点数等于左门柱点数算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为3算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为6算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>右撞柱</p>" + "<br/>" +
            "<p style='fontSize:25'>在撞柱的规则之上，球点数等于右门柱点数算赢，其它算输， 例如：</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱3点，右门柱6点，球点数为6算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:25'>左门柱6点，右门柱3点，球点数为3算赢，其它算输</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>大小</p>" + "<br/>" +
            "<p style='fontSize:25'>球的点数为1（A）、2、3、4、5、6小赢，点数为8、9、10、11（J）、12（Q）、13（K）大赢，7为和（退还大小位置所下注的金额）</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>单双</p>" + "<br/>" +
            "<p style='fontSize:25'>球的点数为1（A）、3、5、9、11（J）、13（K）单赢，点数为2、4、6、8、10、12（Q）双赢，7为和（退还单双位置所下注的金额）</p>" + "<br/>" +
            "<p style='fontSize:28;font-weight:bold'>红黑</p>" + "<br/>" +
            "<p style='fontSize:25'>球的花色为红桃、方块红赢，花色为黑桃、梅花黑赢</p>"
    };
})(LanguageUtils || (LanguageUtils = {}));
