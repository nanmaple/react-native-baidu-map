namespace Enum {
    export enum BetPosType {
       //射进
        IN = 1,
        //射偏
        OUT,
        //撞柱
        HIT,
        //大
        //第三张牌是A、2、3、4、5、6为小；7为和；8、9、10、J、Q、K为大。赔率：大1.97 小1.97 如果为7点（即和局）则退回本金
        BIG,
        //小
        //第三张牌是A、2、3、4、5、6为小；7为和；8、9、10、J、Q、K为大。赔率：大1.97 小1.97 如果为7点（即和局）则退回本金
        SMALL,
        //单
        //第三张牌是A、3、5、9、J、K为单；7为和；2、4、6、8、10、Q为双。赔率：单1.97 双1.97 如果为7点（即和局）则退回本金
        ODD,
        //双
        //第三张牌是A、3、5、9、J、K为单；7为和；2、4、6、8、10、Q为双。赔率：单1.97 双1.97 如果为7点（即和局）则退回本金
        EVEN,
        //红
        //第三张牌是红桃、方块为红；黑桃、梅花为黑。赔率：红1.97 黑1.97
        RED,
        //黑
        //第三张牌是红桃、方块为红；黑桃、梅花为黑。赔率：红1.97 黑1.97
        BLACK,
        //左偏
        LOUT,
        //右偏
        ROUT,
        //左撞柱
        LHIT,
        //右撞柱
        RHIT,   
    }
    export enum BetMorePosType{
        Spade_1 = 101,
         Spade_2 = 102,
         Spade_3 = 103,
         Spade_4 = 104,
         Spade_5 = 105,
         Spade_6 = 106,
         Spade_7 = 107,
         Spade_8 = 108,
         Spade_9 = 109,
         Spade_10 = 110,
         Spade_11 = 111,
         Spade_12 = 112,
         Spade_13 = 113,
         Heart_1 = 201,
         Heart_2 = 202,
         Heart_3 = 203,
         Heart_4 = 204,
         Heart_5 = 205,
         Heart_6 = 206,
         Heart_7 = 207,
         Heart_8 = 208,
         Heart_9 = 209,
         Heart_10 = 210,
         Heart_11 = 211,
         Heart_12 = 212,
         Heart_13 = 213,
         Club_1 = 301,
         Club_2 = 302,
         Club_3 = 303,
         Club_4 = 304,
         Club_5 = 305,
         Club_6 = 306,
         Club_7 = 307,
         Club_8 = 308,
         Club_9 = 309,
         Club_10 = 310,
         Club_11 = 311,
         Club_12 = 312,
         Club_13 = 313,
         Block_1 = 401,
         Block_2 = 402,
         Block_3 = 403,
         Block_4 = 404,
         Block_5 = 405,
         Block_6 = 406,
         Block_7 = 407,
         Block_8 = 408,
         Block_9 = 409,
         Block_10 = 410,
         Block_11 = 411,
         Block_12 = 412,
         Block_13 = 413,
    }
    export enum BetMoreTxtType{
        POKER_A = 1,
        POKER_2 = 2,
        POKER_3 = 3,
        POKER_4 = 4,
        POKER_5 = 5,
        POKER_6 = 6,
        POKER_7 = 7,
        POKER_8 = 8,
        POKER_9 = 9,
        POKER_10 = 10,
        POKER_J = 11,
        POKER_Q = 12,
        POKER_K = 0,
    }

}