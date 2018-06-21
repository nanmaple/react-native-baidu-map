var Enum;
(function (Enum) {
    var BetPosType;
    (function (BetPosType) {
        //射进
        BetPosType[BetPosType["IN"] = 1] = "IN";
        //射偏
        BetPosType[BetPosType["OUT"] = 2] = "OUT";
        //撞柱
        BetPosType[BetPosType["HIT"] = 3] = "HIT";
        //大
        //第三张牌是A、2、3、4、5、6为小；7为和；8、9、10、J、Q、K为大。赔率：大1.97 小1.97 如果为7点（即和局）则退回本金
        BetPosType[BetPosType["BIG"] = 4] = "BIG";
        //小
        //第三张牌是A、2、3、4、5、6为小；7为和；8、9、10、J、Q、K为大。赔率：大1.97 小1.97 如果为7点（即和局）则退回本金
        BetPosType[BetPosType["SMALL"] = 5] = "SMALL";
        //单
        //第三张牌是A、3、5、9、J、K为单；7为和；2、4、6、8、10、Q为双。赔率：单1.97 双1.97 如果为7点（即和局）则退回本金
        BetPosType[BetPosType["ODD"] = 6] = "ODD";
        //双
        //第三张牌是A、3、5、9、J、K为单；7为和；2、4、6、8、10、Q为双。赔率：单1.97 双1.97 如果为7点（即和局）则退回本金
        BetPosType[BetPosType["EVEN"] = 7] = "EVEN";
        //红
        //第三张牌是红桃、方块为红；黑桃、梅花为黑。赔率：红1.97 黑1.97
        BetPosType[BetPosType["RED"] = 8] = "RED";
        //黑
        //第三张牌是红桃、方块为红；黑桃、梅花为黑。赔率：红1.97 黑1.97
        BetPosType[BetPosType["BLACK"] = 9] = "BLACK";
        //左偏
        BetPosType[BetPosType["LOUT"] = 10] = "LOUT";
        //右偏
        BetPosType[BetPosType["ROUT"] = 11] = "ROUT";
        //左撞柱
        BetPosType[BetPosType["LHIT"] = 12] = "LHIT";
        //右撞柱
        BetPosType[BetPosType["RHIT"] = 13] = "RHIT";
    })(BetPosType = Enum.BetPosType || (Enum.BetPosType = {}));
    var BetMorePosType;
    (function (BetMorePosType) {
        BetMorePosType[BetMorePosType["Spade_1"] = 101] = "Spade_1";
        BetMorePosType[BetMorePosType["Spade_2"] = 102] = "Spade_2";
        BetMorePosType[BetMorePosType["Spade_3"] = 103] = "Spade_3";
        BetMorePosType[BetMorePosType["Spade_4"] = 104] = "Spade_4";
        BetMorePosType[BetMorePosType["Spade_5"] = 105] = "Spade_5";
        BetMorePosType[BetMorePosType["Spade_6"] = 106] = "Spade_6";
        BetMorePosType[BetMorePosType["Spade_7"] = 107] = "Spade_7";
        BetMorePosType[BetMorePosType["Spade_8"] = 108] = "Spade_8";
        BetMorePosType[BetMorePosType["Spade_9"] = 109] = "Spade_9";
        BetMorePosType[BetMorePosType["Spade_10"] = 110] = "Spade_10";
        BetMorePosType[BetMorePosType["Spade_11"] = 111] = "Spade_11";
        BetMorePosType[BetMorePosType["Spade_12"] = 112] = "Spade_12";
        BetMorePosType[BetMorePosType["Spade_13"] = 113] = "Spade_13";
        BetMorePosType[BetMorePosType["Heart_1"] = 201] = "Heart_1";
        BetMorePosType[BetMorePosType["Heart_2"] = 202] = "Heart_2";
        BetMorePosType[BetMorePosType["Heart_3"] = 203] = "Heart_3";
        BetMorePosType[BetMorePosType["Heart_4"] = 204] = "Heart_4";
        BetMorePosType[BetMorePosType["Heart_5"] = 205] = "Heart_5";
        BetMorePosType[BetMorePosType["Heart_6"] = 206] = "Heart_6";
        BetMorePosType[BetMorePosType["Heart_7"] = 207] = "Heart_7";
        BetMorePosType[BetMorePosType["Heart_8"] = 208] = "Heart_8";
        BetMorePosType[BetMorePosType["Heart_9"] = 209] = "Heart_9";
        BetMorePosType[BetMorePosType["Heart_10"] = 210] = "Heart_10";
        BetMorePosType[BetMorePosType["Heart_11"] = 211] = "Heart_11";
        BetMorePosType[BetMorePosType["Heart_12"] = 212] = "Heart_12";
        BetMorePosType[BetMorePosType["Heart_13"] = 213] = "Heart_13";
        BetMorePosType[BetMorePosType["Club_1"] = 301] = "Club_1";
        BetMorePosType[BetMorePosType["Club_2"] = 302] = "Club_2";
        BetMorePosType[BetMorePosType["Club_3"] = 303] = "Club_3";
        BetMorePosType[BetMorePosType["Club_4"] = 304] = "Club_4";
        BetMorePosType[BetMorePosType["Club_5"] = 305] = "Club_5";
        BetMorePosType[BetMorePosType["Club_6"] = 306] = "Club_6";
        BetMorePosType[BetMorePosType["Club_7"] = 307] = "Club_7";
        BetMorePosType[BetMorePosType["Club_8"] = 308] = "Club_8";
        BetMorePosType[BetMorePosType["Club_9"] = 309] = "Club_9";
        BetMorePosType[BetMorePosType["Club_10"] = 310] = "Club_10";
        BetMorePosType[BetMorePosType["Club_11"] = 311] = "Club_11";
        BetMorePosType[BetMorePosType["Club_12"] = 312] = "Club_12";
        BetMorePosType[BetMorePosType["Club_13"] = 313] = "Club_13";
        BetMorePosType[BetMorePosType["Block_1"] = 401] = "Block_1";
        BetMorePosType[BetMorePosType["Block_2"] = 402] = "Block_2";
        BetMorePosType[BetMorePosType["Block_3"] = 403] = "Block_3";
        BetMorePosType[BetMorePosType["Block_4"] = 404] = "Block_4";
        BetMorePosType[BetMorePosType["Block_5"] = 405] = "Block_5";
        BetMorePosType[BetMorePosType["Block_6"] = 406] = "Block_6";
        BetMorePosType[BetMorePosType["Block_7"] = 407] = "Block_7";
        BetMorePosType[BetMorePosType["Block_8"] = 408] = "Block_8";
        BetMorePosType[BetMorePosType["Block_9"] = 409] = "Block_9";
        BetMorePosType[BetMorePosType["Block_10"] = 410] = "Block_10";
        BetMorePosType[BetMorePosType["Block_11"] = 411] = "Block_11";
        BetMorePosType[BetMorePosType["Block_12"] = 412] = "Block_12";
        BetMorePosType[BetMorePosType["Block_13"] = 413] = "Block_13";
    })(BetMorePosType = Enum.BetMorePosType || (Enum.BetMorePosType = {}));
})(Enum || (Enum = {}));
