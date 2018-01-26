var Enum;
(function (Enum) {
    var BetPosType;
    (function (BetPosType) {
        //射进
        BetPosType[BetPosType["IN"] = 1] = "IN";
        //射偏
        BetPosType[BetPosType["OUT"] = 2] = "OUT";
        //中柱
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
    })(BetPosType = Enum.BetPosType || (Enum.BetPosType = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=BetPosType.js.map