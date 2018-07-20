namespace Enum {
    /**
     * 监听UI事件类型枚举
     */
    export enum ListenViewEnum {
        /**
         * 游戏资源加载完成
         */
        GameLoadComplate = 0,
        /***********扩展***********/
        /**
         * 投注按钮点击
         */
        BetPos,
        /**
         * 动画播放完成
         */
        AniPlayComplete,
        /**
         * 关闭规则
         */
        CloseRule,
        /**
         * 打开游戏规则
         */
        OpenRule,
        /**
         * 获取记录
         */
        GetRecord,
        /**
         * 打开记录
         */
        OpenRecord,
    }
}