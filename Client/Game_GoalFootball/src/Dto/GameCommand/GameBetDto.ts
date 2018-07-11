namespace Dto{
    /**
     * 游戏投注Dto
     */
    export class GameBetDto{
        /**
         * 投注基数（每注金额）
         */
        Amount: number = 0;
        /**
         * 道具使用情况
         */
        Props: Array<any> = [];
    }
}