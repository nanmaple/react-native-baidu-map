namespace Utils {
    /**
     * 牌数据转换类
     */
    export class Poker {
        /**
         * 获取花色
         */
        // static GetCardColor(type: number): Enum.CardColor {
        //     return (type - 1) / 13;
        // }

        /**
         * 获取牌的值
         */
        static GetNumber(type: number): number {
            let num: number = (type - 1) % 13;
            num++;
            return num;
        }
    }
}