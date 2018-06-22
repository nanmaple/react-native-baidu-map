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
        /// <summary>
        /// 低于最小投注限额
        /// </summary>
        LOW_LIMIT: "Low The Limit",

        IN: "Goal",
        OUT: "Out",
        HIT: "Hit",
        RED: "Red",
        BLACK: "Black",
        BIG: "Big",
        SMALL: "Small",
        ODD: "Odd",
        EVEN: "Even",
        LOUT: "L.Out",
        ROUT: "R.Out",
        LHIT: "L.Hit",
        RHIT: "R.Hit",
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
        //投注信息提示
        betSuccess: "Bet Success",
        betFail: "Bet Fail",
        gameSuccess: "Guess Success",
        gameFail: "Guess Fail",

        //游戏规则内容
        GameRule:"<p style='fontSize:30;font-weight:bold'>Game Introduction</p>"+"<br/>"+
        "<p style='fontSize:25'>Shooting Longmen is a small game of intelligence, players can choose the probability of playing cards to choose the position of the bet, so as to get the corresponding score as a reward.</p>"+"<br/>"+
        "<p style='fontSize:25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the beginning of each game, the system randomly selected three cards from 52 cards, the first as the left door post, the second as the ball, and the third as the right door. Guess the ball game player card position, position corresponding odds guess scores.</p>"+"<br/>"+
        "<p style='fontSize:30;font-weight:bold'>Rule Description</p>"+"<br/>"+
        "<p style='fontSize:25'>1.The game is 30 seconds.</p>"+"<br/>"+
        "<p style='fontSize:25'>2.The number of poker points, 'A' is 1, 'J' is 11, 'Q' is 12, 'K' is 13, and the others are counted as the number of poker face numbers.</p>"+"<br/>"+
        "<p style='fontSize:25'>3.The size, the single double, the red and black are the fixed odds of 1.97. The other playing method generates the odds dynamically according to the probability, which contains the principal.</p>"+"<br/>"+
        "<p style='fontSize:25'>4.Players choose their own bets to make a bet.</p>"+"<br/>"+
        "<p style='fontSize:25'>5.When the size of a single pair is 7 on second cards, the result is the sum of all the amount of the sum of the size of the single and double position.</p>"+"<br/>"+
        "<p style='fontSize:30;font-weight:bold'>Win or lose Description</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot In</p>"+"<br/>"+
        "<p style='fontSize:25'>The number of balls is between the left door post and the right door post points (no left and right door columns, regardless of the order) to win, and other losses, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the number of points is 4, 5 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the number of points is 4, 5 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot Out</p>"+"<br/>"+
        "<p style='fontSize:25'>The number of balls is won by the number of points in the left and right door columns (no left and right door columns, regardless of the order), and other losses, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the number of points is 1 (A), 2, 7, 8, 9, 10, 11 (J), 12 (Q), and 13 (K) wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the number of points is 1 (A), 2, 7, 8, 9, 10, 11 (J), 12 (Q), and 13 (K) wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot Left Out</p>"+"<br/>"+
        "<p style='fontSize:25'>On the rule of shooting deviation, the number of points of the ball is won by the number of points in the left door (and the order of size), and the other is lost, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the number of points is 1 (A), 2 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the number of points is 7, 8, 9, 10, 11 (J), 12 (Q), 13 (K) wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot Right Out</p>"+"<br/>"+
        "<p style='fontSize:25'>On the rule of shooting deviation, the number of points of the ball is won by the number of points in the right door (and the order of size), and the other is lost, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the number of points is 7, 8, 9, 10, 11 (J), 12 (Q), 13 (K) wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the number of points is 1 (A), 2 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot GoalPost</p>"+"<br/>"+
        "<p style='fontSize:25'>The number of points is equal to the number of left door posts or the number of right door posts (regardless of the order) to win, and the other is lost, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the number of points is 3, 6 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the number of points is 3, 6 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot Left GoalPost</p>"+"<br/>"+
        "<p style='fontSize:25'>On the rules of the hit column, the number of points of the ball is won by the number of points is equal to the number of points in the left door, and the other is lost, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the ball point number is 3 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the ball point number is 6 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Shoot Right GoalPost</p>"+"<br/>"+
        "<p style='fontSize:25'>On the rules of the hit column, the number of points of the ball is won by the number of points is equal to the number of points in the right door, and the other is lost, such as:</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 3 points, the right door column is 6, the ball point number is 6 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:25'>The left door column is 6 points, the right door column is 3, the ball point number is 3 wins, the other is lost.</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Size</p>"+"<br/>"+
        "<p style='fontSize:25'>The number of points of the ball is 1 (A), 2, 3, 4, 5, 6 small win, the number of points of the ball is 8、9、10、11（J）、12（Q）、13（K）big win, 7 is draw and (the amount of money refunded).</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Single and double</p>"+"<br/>"+
        "<p style='fontSize:25'>The number of points of the ball is 1 (A), 3, 5, 9, 11 (J), 13 (K) single win, the number of points of the ball is 2、4、6、8、10、12（Q）double win, 7 is draw and (the amount of money refunded).</p>"+"<br/>"+
        "<p style='fontSize:28;font-weight:bold'>Red and Black</p>"+"<br/>"+
        "<p style='fontSize:25'>The color of the ball is red heart、block red win, the color of the ball is black heart、plum black win.</p>",
        
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

        //头部显示账号
        Account: "ID:",

        POKER_A: "A",
        POKER_2: "2",
        POKER_3: "3",
        POKER_4: "4",
        POKER_5: "5",
        POKER_6: "6",
        POKER_7: "7",
        POKER_8: "8",
        POKER_9: "9",
        POKER_10: "10",
        POKER_J: "J",
        POKER_Q: "Q",
        POKER_K: "K",

        Spade_1: "Spade A",
        Spade_2: "Spade 2",
        Spade_3: "Spade 3",
        Spade_4: "Spade 4",
        Spade_5: "Spade 5",
        Spade_6: "Spade 6",
        Spade_7: "Spade 7",
        Spade_8: "Spade 8",
        Spade_9: "Spade 9",
        Spade_10: "Spade 10",
        Spade_11: "Spade J",
        Spade_12: "Spade Q",
        Spade_13: "Spade K",
        Heart_1: "Heart A",
        Heart_2: "Heart 2",
        Heart_3: "Heart 3",
        Heart_4: "Heart 4",
        Heart_5: "Heart 5",
        Heart_6: "Heart 6",
        Heart_7: "Heart 7",
        Heart_8: "Heart 8",
        Heart_9: "Heart 9",
        Heart_10: "Heart 10",
        Heart_11: "Heart J",
        Heart_12: "Heart Q",
        Heart_13: "Heart K",
        Club_1: "Club A",
        Club_2: "Club 2",
        Club_3: "Club 3",
        Club_4: "Club 4",
        Club_5: "Club 5",
        Club_6: "Club 6",
        Club_7: "Club 7",
        Club_8: "Club 8",
        Club_9: "Club 9",
        Club_10: "Club 10",
        Club_11: "Club J",
        Club_12: "Club Q",
        Club_13: "Club K",
        Block_1: "Block A",
        Block_2: "Block 2",
        Block_3: "Block 3",
        Block_4: "Block 4",
        Block_5: "Block 5",
        Block_6: "Block 6",
        Block_7: "Block 7",
        Block_8: "Block 8",
        Block_9: "Block 9",
        Block_10: "Block 10",
        Block_11: "Block J",
        Block_12: "Block Q",
        Block_13: "Block K",

        //游戏关注提示内容
        GameTips:"<p style='fontSize:35'>Since you haven't logged in yet, now it's a play mode, to experience more fun games, click on the top left</p>"+
        "<p style='fontSize:35;color:red'>&nbsp;'attention'&nbsp;</p>"+
        "<p style='fontSize:35'>button to log in.</p>",


        //局号面板投注状态信息（BetStatus）
        /**
         * 期号
         */
        Issue: "No:",
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

    }
}