namespace GameEnum {
    /**
     * 游戏管理向游戏界面管理数据通知枚举
     */
    export enum GameViewEnum{
        /**
         * 提示效果
         */
        Alert=0,
        /**
         * 错误信息
         */
        Error=1,
        /**
         * Loading
         */
        Loading=2,
        /**
         * 登录处理完成
         */
        LoginComplete=3,
        /**
         * 游戏数据分发
         */
        GameData=4,

        /**
         * 投注
         */
        BetPos=5,
        /**
         * 添加投注记录
         */
        SetRecord = 6,
        /**
         * 改变余额
         */
        ChangMoney = 7,
        /**
         * 获取用户信息
         */
        GetMemberInfo = 8,
    }
}