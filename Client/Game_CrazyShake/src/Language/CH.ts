namespace LanguageUtils {
    export const CH = {
        /**
         * 操作成功
         */
        Success: "操作成功",
        /**
         * 参数无效
         */
        InvalidArgument: "参数无效",
        /**
         * IP受限
         */
        IPLimited: "IP受限",
        // 登录错误码
        /**
         * 会员已存在(注册新账号时)
         */
        MemberExist: "会员已存在",
        /**
         * 会员不存在
         */
        MemberNotExist: "会员不存在",
        /**
         * 会员被冻结
         */
        MemberClosed: "账号已关闭！",
       

        //Token错误
        /**
         * Token为空
         */
        NullToken: "Token为空",
        /**
         * 服务器时间差错误
         */
        OverTime: "服务器时间差错误",
        /**
         * token失效
         */
        TokenInvalid: "token失效",
        /**
         * Token解密失败
         */
        TokenDecodeError: "Token解密失败",
        /**
         * Signature签名错误
         */
        SignatureError: "Signature签名错误",
        /**
         * Playload参数错误
         */
        PlayloadError: "Playload参数错误",
        /**
         * 帐号无效
         */
        AccountInvalid: "帐号无效",
        /**
         * 拒绝游客
         */
        RefuseTourist: "拒绝游客",
        /**
         * 解析的payload会员ID无效
         */
        MemberIdInvalid: "解析的payload会员ID无效",


        // 会员信息操作
        /**
         * 账号已存在
         */
        AccountExist: "账号已存在",
        /**
         * 已设置过账号(只能设置一次)
         */
        AccountHasBeenSetup: "已设置过账号",
        /**
         * 已是代理
         */
        AlreadyAgent: "已是代理",
        /**
         * 邮箱已存在
         */
        EmailExist: "邮箱已存在",
        /**
         * 密码错误(重置密码功能)
         */
        ErrorPassword: "密码错误",
        /**
         * 父级不能是自己
         */
        ParentCanNotBeSelf: "父级不能是自己",
        /**
         * 手机号已存在(设置手机号)
         */
        PhoneNumberExist: "手机号已存在",
        /**
         * 邮箱与之前的相同(重置邮箱时)
         */
        SameEmail: "邮箱与之前的相同",
        /**
         * 密码与之前设置的相同(重置密码时)
         */
        SamePassword: "密码与之前设置的相同",
        /**
         * 手机号与之前设置的相同(重新设置手机号时)
         */
        SamePhoneNumber: "手机号与之前设置的相同",
        /**
         * 邮箱格式错误
         */
        WrongEmail: "邮箱格式错误",
        /**
         * 手机号格式错误
         */
        WrongPhoneNumber: "手机号格式错误",
        /**
         * 父子级关系不存在
         */
        AgencyRelationshipNotExist: "父子级关系不存在",

        // 进取分错误
        /**
         * 修改会员分数失败
         */
        ModifyMemberScoreFailed: "修改会员分数失败",
        /**
         * 修改会员的父级会员分数失败
         */
        ModifyParentScoreFailed: "修改会员的父级会员分数失败",
        /**
         * 账户登出
         */
        AccountLoginOut: "账户已退出登录",
        /**
         * 正在连接
         */
        ConnectService: "Connect Service...",
        /**
         * 低于最小投注限额
         */
        LOW_LIMIT: "低于最小投注限额",

        /**
         * 获取用户信息失败
         */
        GetMemberInfoError:"获取用户信息失败",

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
        OVER_LIMIT: "超过最大投注限额",
        //投注信息提示
        betSuccess: "投注成功",
        betFail: "投注失败",
        gameSuccess: "有猜中哦",
        gameFail: "很遗憾，再接再厉",
        /**
         * 参数错误
         */
        ParameterError:"参数错误",

        //游戏关注提示内容
        GameTips:"<p style='fontSize:35'>由于您还没有登录，现在是试玩模式，想要体验更多游戏乐趣，请点击左上方</p>"+
        "<p style='fontSize:35;color:red'>&nbsp;'关注'&nbsp;</p>"+
        "<p style='fontSize:35'>按钮，即可登录。</p>",
        /***********游戏按钮注释********* */
        /**
         * 投注按钮信息
         */
        BetNote:"猜对×",
        /**
         * 投注小的信息
         */
        LittleRule:"4-10点",
        /**
         * 投注豹子的信息
         */
        JaguarRule:"3个点数相同",
        /**
         * 投注大的信息
         */
        BigRule:"11-17点",
        /**
         * 最大按钮信息
         */
        MaxBtnNote:"最大",

        /************游戏结算结果***********/

        /**
         * 余额不足
         */
        InsufficientBalance :"余额不足",
        /**
         * 投注总金额超过额度限制
         */
        OverLimit:"投注金额超过限制",
        /**
         * 投注结果 “小”
         */
        Little:"小",
        /**
         * 投注结果 “大”
         */
        Big:"大",
        /**
         * 投注结果 “豹子”
         */
        Jaguar:"豹子",
        /*********历史记录面板********/
        /**
         * 序号
         */
        NumTit:"序号",
        /**
         * 获得奖励
         */
        RewardTit:"获得奖励",
        /**
         * 时间
         */
         TimeTit:"时间",
         /**
          * 暂无数据
          */
         NoRecord:"暂无数据",
         /**
          * 正在加载
          */
         IsLoading:"正在加载...",
    }
}