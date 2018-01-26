"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const ChildScoreRecordDto_1 = require("../Dto/ChildScoreRecordDto");
const BaseCtrl_1 = require("../Base/BaseCtrl");
class ScoreRecordCtrl extends BaseCtrl_1.default {
    constructor() {
        super();
        /**
         * 获取所有子级会员分数参数
         */
        this.ChildScoreListParams = new ChildScoreRecordDto_1.ListParamsCtrlDto();
    }
    /**
    * 获取所有子级会员分数
    * @param isRefresh 是否刷新
    * @param handler 回调
    */
    GetScoreRecord(memberId, isRefresh, handler) {
        if (this.ChildScoreListParams.IsLoading) {
            return;
        }
        this.ChildScoreListParams.IsLoading = true;
        if (isRefresh) {
            this.ChildScoreListParams.LastId = null;
            this.ChildScoreListParams.IsNoMore = false;
        }
        let dto = new ChildScoreRecordDto_1.ListParamsDto();
        dto.LastId = this.ChildScoreListParams.LastId;
        dto.PageSize = this.ChildScoreListParams.PageSize;
        dto.MemberId = memberId;
        this.webApi.Post(Config_1.GetTransferLogApi, dto).then((data) => {
            console.log("GetChildScoreList Success", data);
            if (data) {
                let length = data.length;
                if (data.length < this.ChildScoreListParams.PageSize) {
                    this.ChildScoreListParams.IsNoMore = true;
                }
                else {
                    this.ChildScoreListParams.LastId = data[length - 1].Id;
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
//# sourceMappingURL=ChildScoreRecordCtrl.js.map