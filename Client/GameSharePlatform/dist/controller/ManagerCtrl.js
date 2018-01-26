"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webapi_1 = require("../webapi");
var Config_1 = require("./Config");
var ListParamsDto_1 = require("../dto/ListParamsDto");
var MemberCtrl = /** @class */ (function () {
    function MemberCtrl() {
        //api接口层
        this.webApi = webapi_1.default.instance;
        /**
         * 获取所有子级会员分数参数
         */
        this.ChildScoreListParams = new ListParamsDto_1.ListParamsCtrlDto();
    }
    /**
     * 获取所有子级会员分数
     */
    MemberCtrl.prototype.GetChildScoreList = function (isRefresh, Handler) {
        var _this = this;
        if (this.ChildScoreListParams.IsLoading) {
            return;
        }
        this.ChildScoreListParams.IsLoading = true;
        if (isRefresh) {
            this.ChildScoreListParams.LastId = null;
            this.ChildScoreListParams.IsNoMore = false;
        }
        var dto = new ListParamsDto_1.ListParamsDto();
        dto.LastId = this.ChildScoreListParams.LastId;
        dto.PageSize = this.ChildScoreListParams.PageSize;
        this.webApi.Post(Config_1.GetChildScoreListApi, dto).then(function (data) {
            console.log("GetChildScoreList Success", data);
            if (!data) {
                var length_1 = data.length;
                if (data.length < _this.ChildScoreListParams.PageSize) {
                    _this.ChildScoreListParams.IsNoMore = true;
                }
                else {
                    _this.ChildScoreListParams.LastId = data[length_1 - 1].MemberId;
                }
                _this.ChildScoreListParams.IsLoading = false;
                Handler(data, isRefresh);
            }
        }, function (error) {
            _this.ChildScoreListParams.IsLoading = false;
            console.log("GetChildScoreList error", error);
            Handler(null, isRefresh, error);
        });
    };
    return MemberCtrl;
}());
exports.default = MemberCtrl;
//# sourceMappingURL=ManagerCtrl.js.map