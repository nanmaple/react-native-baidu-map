namespace Enum{
    /**
     * 监听UI事件类型枚举
     */
    export enum ListenViewEnum{
        /**
         * 游戏资源加载完成
         */
        GameLoadComplate = 0,
        /**
         * 投注
         */
        BetPos,
        /**
         * 点击射门
         */
        ShootDoor,
        /**
         * 游戏结束(动画完成)
         */
        GameResult,
        /**
         * 选择筹码
         */
        ChooseChip,
        /**
         * 选择最大筹码
         */
        ChooseMaxChip,
        /**
         * 选择道具
         */
        ChooseProp,
        /**
         * 获取余额
         */
        GetBalance,
        /**
         * 打开规则面板
         */
        OpenRule,
        /**
         * 打开游戏记录面板
         */
        OpenRecord,
        /**
         * 获取游戏记录
         */
        GetRecord,
    }
}