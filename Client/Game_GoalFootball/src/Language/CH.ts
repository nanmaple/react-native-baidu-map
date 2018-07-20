namespace LanguageUtils {
    export const CH = {

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

        /************************************/

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
         * 低于最小投注限额
         */
        LOW_LIMIT: "低于最小投注限额",
        /**
         * 超过最大投注限额
         */
        OVER_LIMIT: "超过最大投注限额",

        /**
         * 选择最大筹码
         */
        MaxChip: "最大",
        /**
         * 总投
         */
        Total: "总投:",

        //游戏规则内容
        GameRuleFirst: "左右点击切换选择数值按钮或直接点击“Max”按钮，确认射门使用的投注金额。",
        GameRuleSecond: "可以使用道具。一种道具减少一名防守队员。",
        GameRuleThird: "上下左右滑动黄色路径，调整最佳射门角度，事半功倍。",
        GameRuleFour: "点击“射门”，临门一脚。",
        /**
         * 游戏总的规则说明
         */
        GameTotalRule:"<p style='fontSize:30;font-weight:bold;color:#f6ef45'>玩家规则</p>"+"<br/>"+
        "<p style='fontSize:20;color:#fff'>1.选择投注金额后，调整射门角度;</p>"+"<br/>"+
        "<p style='fontSize:20;color:#fff'>2.使用一种道具能减少一名防守队员，最多可以使用三种道具。道具的金额根据投注金额按比例进行变化，以用户“射门”时显示的道具金额为准;</p>"+"<br/>"+
        "<p style='fontSize:20;color:#fff'>3.点击“射门”开始踢球;</p>"+"<br/>"+
        "<p style='fontSize:20;color:#fff'>4.用户进球后，可以获得1.5、2、5、10倍不等奖励;</p>"+"<br/>",

        //游戏图片多语言切换
        /**
         * 射门默认按钮皮肤
         */
        ShootDoorSkin: "ui/chip/btn_shoor.png",
        /**
         * 射门按下按钮皮肤
         */
        NoShootDoorSkin: "ui/chip/btn_shoor_n.png",
        /**
         * 选中的筹码皮肤
         */
        SelectChipSkin: "ui/chip/btn_select.png",
        /**
         * 未选中的筹码皮肤
         */
        NoSelectChipSkin: "ui/chip/btn_noselect.png",
        /**
         * 游戏头部标题皮肤
         */
        HeadTitleSkin: "ui/header/head_tit.png",
        /**
         * 游戏规则头部皮肤
         */
        RuleTitleSkin: "ui/rule/rule_title.png",
        /**
         * 游戏规则第四张图皮肤（射门）
         */
        RuleImgFourSkin: "ui/rule/ruleImg_4.png",
    }
}