/**
 * 多语言配置-中文配置
 */
var LanguageUtils;
(function (LanguageUtils) {
    LanguageUtils.CH = {
        //↓↓↓↓无需修改↓↓↓↓
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
        MemberClosed: "账号已关闭！",
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
        /// <summary>
        /// 账户登出
        /// </summary>
        AccountLoginOut: "账户已退出登录",
        /// <summary>
        /// 正在连接
        /// </summary>
        ConnectService: "Connect Service...",
        //↑↑↑↑无需修改↑↑↑↑
        /**
         * 余额不足
         */
        BalanceSmall: "余额不足",
        /**
         * 低于最小投注限额
         */
        LowLimit: "低于最小投注限额",
        /**
         * 超过最大投注限额
         */
        OverLimit: "超过最大投注限额",
        /**
         * 记录序号标题
         */
        RecordNumTitle: "序号",
        /**
         * 记录奖励标题
         */
        RecordRewardTitle: "获得奖励",
        /**
         * 记录时间标题
         */
        RecordTimeTitle: "时间",
        /**
         * 记录暂无数据
         */
        NoRecordData: "暂无记录",
        /**
         * 记录正在加载中
         */
        IsLoading: "正在加载中...",
        /**
         * 游戏总的规则说明
         */
        GameTotalRule: "<p style='fontSize:30;font-weight:bold;color:#f6ef45'>玩家规则</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>1.选择投注金额后，调整射门角度;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>2.使用一种道具能减少一名防守队员，最多可以使用三种道具。道具的金额根据投注金额按比例进行变化，以用户“射门”时显示的道具金额为准;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>3.点击“射门”开始踢球;</p>" + "<br/>" +
            "<p style='fontSize:25;color:#fff'>4.用户进球后，可以获得1.5、2、5、10倍不等奖励;</p>" + "<br/>",
        /******游戏刮奖区多语言******/
        /**
         * 第1层
         */
        Level1: "第1层",
        /**
         * 第2层
         */
        Level2: "第2层",
        /**
         * 第3层
         */
        Level3: "第3层",
        /**
         * 第4层
         */
        Level4: "第4层",
        /**
         * 第5层
         */
        Level5: "第5层",
        /**
         * 第6层
         */
        Level6: "第6层",
        /**
         * 第7层
         */
        Level7: "第7层",
        /**
         * 游戏一标题
         */
        RuleOneTitle: "游戏一",
        /**
         * 游戏一内容
         */
        RuleOneContent: "左列七层麻将中，任一层的麻将符号全部出现在[我的麻将]区，即得该层的倍数奖励",
        /**
         * 游戏二标题
         */
        RuleTwoTitle: "游戏二",
        /**
         * 游戏一内容
         */
        RuleTwoContent: "刮出3个即以上的相同倍数，即得该倍数的奖励",
        /**
         * 我的麻将
         */
        MyMahjong: "我的麻将",
        /**
         * 游戏一开奖区说明
         */
        Game1ResExplain: "刮开[我的麻将]区，共有8个不同麻将符号",
        /******游戏投注部分多语言切换******/
        /**
         * 最大金额投注
         */
        Maxbet: "最大",
        /**
         * 开始刮
         */
        StartScrape: "开始刮",
        /**
         * 兑奖
         */
        StartCash: "兑奖",
        /**
         * 再刮一次
         */
        ScrapeAgain: "再刮一次",
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
//# sourceMappingURL=CH.js.map