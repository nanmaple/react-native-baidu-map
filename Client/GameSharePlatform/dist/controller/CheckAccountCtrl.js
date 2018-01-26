"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const ScoreRecordDto_1 = require("../Dto/ScoreRecordDto");
const BaseCtrl_1 = require("../Base/BaseCtrl");
class ScoreRecordCtrl extends BaseCtrl_1.default {
    constructor() {
        super();
        /**
         * 获取所有子级会员分数参数
         */
        this.ChildScoreListParams = new ScoreRecordDto_1.ListParamsCtrlDto();
    }
    /**
    * 获取所有子级会员分数
    * @param isRefresh 是否刷新
    * @param handler 回调
    */
    GetScoreRecord(isRefresh, handler) {
        if (this.ChildScoreListParams.IsLoading) {
            return;
        }
        this.ChildScoreListParams.IsLoading = true;
        if (isRefresh) {
            this.ChildScoreListParams.LogId = null;
            this.ChildScoreListParams.IsNoMore = false;
        }
        let dto = new ScoreRecordDto_1.ListParamsDto();
        dto.LogId = this.ChildScoreListParams.LogId;
        dto.PageSize = this.ChildScoreListParams.PageSize;
        dto.TransactionType = 1;
        dto.Desc = true;
        this.webApi.Post(Config_1.GetScoreLogsApi, dto).then((data) => {
            console.log("GetChildScoreList Success", data);
            if (data) {
                let length = data.length;
                if (data.length < this.ChildScoreListParams.PageSize) {
                    this.ChildScoreListParams.IsNoMore = true;
                }
                else {
                    //this.ChildScoreListParams.LogId = data[length - 1].MemberId;
                }
                this.ChildScoreListParams.IsLoading = false;
                handler(data, [isRefresh]);
            }
        }, (error) => {
            this.ChildScoreListParams.IsLoading = false;
            console.log("GetChildScoreList error", error);
            handler(null, [isRefresh], error);
        });
    }
}
exports.default = ScoreRecordCtrl;
//# sourceMappingURL=CheckAccountCtrl.js.map