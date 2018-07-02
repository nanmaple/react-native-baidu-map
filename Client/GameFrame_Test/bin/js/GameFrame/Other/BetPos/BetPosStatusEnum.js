/*
* name;
*/
var BetPosStatus;
(function (BetPosStatus) {
    //禁用
    BetPosStatus[BetPosStatus["Forbid"] = 0] = "Forbid";
    //正常
    BetPosStatus[BetPosStatus["Allow"] = 1] = "Allow";
    //满额
    BetPosStatus[BetPosStatus["Full"] = 2] = "Full";
})(BetPosStatus || (BetPosStatus = {}));
//# sourceMappingURL=BetPosStatusEnum.js.map