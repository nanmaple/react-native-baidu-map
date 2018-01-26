"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const ListParamsDto_1 = require("../Dto/ListParamsDto");
class MemberCtrl {
    constructor() {
        /**
         * 获取所有子级会员分数参数
         */
        this.ChildScoreListParams = new ListParamsDto_1.ListParamsCtrlDto();
        this.webApi = WebApi.GetInstance();
    }
    /**
     * 获取所有子级会员分数
     */
    GetChildScoreList(isRefresh, handler) {
        if (this.ChildScoreListParams.IsLoading) {
            return;
        }
        this.ChildScoreListParams.IsLoading = true;
        if (isRefresh) {
            this.ChildScoreListParams.LastId = null;
            this.ChildScoreListParams.IsNoMore = false;
        }
        let dto = new ListParamsDto_1.ListParamsDto();
        dto.LastId = this.ChildScoreListParams.LastId;
        dto.PageSize = this.ChildScoreListParams.PageSize;
        this.webApi.Post(Config_1.GetChildScoreListApi, dto).then((data) => {
            console.log("GetChildScoreList Success", data);
            if (data) {
                let length = data.length;
                if (data.length < this.ChildScoreListParams.PageSize) {
                    this.ChildScoreListParams.IsNoMore = true;
                }
                else {
                    this.ChildScoreListParams.LastId = data[length - 1].MemberId;
                }
                this.ChildScoreListParams.IsLoading = false;
                handler(data, isRefresh);
            }
        }, (error) => {
            this.ChildScoreListParams.IsLoading = false;
            console.log("GetChildScoreList error", error);
            handler(null, isRefresh, error);
        });
    }
    GetMemberInfo(memberId, handler) {
        let dto = {
            MemberId: memberId
        };
        this.webApi.Post(Config_1.GetMemberInfoApi, dto).then((data) => {
            console.log("GetMemberInfo Success", data);
            if (data) {
                handler(data, memberId);
            }
        }, (error) => {
            console.log("GetMemberInfo error", error);
            handler(null, memberId, error);
        });
    }
}
exports.default = MemberCtrl;
//# sourceMappingURL=MemberInforCtrl.js.map