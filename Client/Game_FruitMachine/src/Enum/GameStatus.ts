namespace Enum {
    export enum GameStatus {
        /**
         * 默认
         */
        Default = 0,
        /**
         * 猜大小
         */
        Guess = 1,
        /**
         * 进行中
         */
        Execute = 2,

        /**等待初始化 */

        WaitInit = 3,
    }
}