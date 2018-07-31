namespace Utils{
    /**
     * 投注金额加减
     */
    export class BetAmount{
        /**
         * 减少投注额
         * @param nowBet 当前投注额
         * @param minBet 最小投注额
         */
        static ReduceBet(nowBet:number, minBet:number):any{
            let money:number = 0;
            let len:number = nowBet.toString().length;
            money = nowBet > Math.pow(10,len - 1) ? nowBet - Math.pow(10,len - 1) : nowBet - Math.pow(10,len - 2);
            money = money < minBet ? nowBet : money;
            return money;
        }
        /**
         * 增加投注额
         * @param nowBet 当前投注额
         * @param maxBet 最大投注额
         */
        static AddBet(nowBet:number, maxBet:number):any{
            let money:number = 0;
            let len:number = nowBet.toString().length;
            money = nowBet + Math.pow(10,len - 1);
            money = money > maxBet ? nowBet : money;
            return money;
        }
    }
}