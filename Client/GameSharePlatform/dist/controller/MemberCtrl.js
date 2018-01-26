"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const ChildListParamsDto_1 = require("../Dto/ChildListParamsDto");
const ErrorCode_1 = require("../Enum/ErrorCode");
const Verification_1 = require("../Utils/Verification");
const BaseCtrl_1 = require("../Base/BaseCtrl");
class MemberCtrl extends BaseCtrl_1.default {
    constructor() {
        super();
        /**
         * 获取所有子级会员分数参数
         */
        this.ChildScoreListParams = new ChildListParamsDto_1.ListParamsCtrlDto();
        /**
         * 转账记录参数
         */
        this.TransferLogParams = new ChildListParamsDto_1.TransferLogCtrlDto();
    }
    /**
     * 获取所有子级会员分数
     * @param isRefresh 是否刷新
     * @param handler 回调
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
        let dto = new ChildListParamsDto_1.ListParamsDto();
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
                handler(data, [isRefresh]);
            }
        }, (error) => {
            this.ChildScoreListParams.IsLoading = false;
            handler(null, [isRefresh], error);
        });
    }
    /**
     * 查询转账记录
     * @param memberId 会员ID
     * @param isRefresh 是否刷新
     * @param handler 回调
     */
    GetTransferLog(memberId, isRefresh, handler) {
        if (this.TransferLogParams.IsLoading) {
            return;
        }
        this.TransferLogParams.IsLoading = true;
        if (isRefresh) {
            this.TransferLogParams.LastId = null;
            this.TransferLogParams.IsNoMore = false;
        }
        let dto = new ChildListParamsDto_1.TransferLogDto();
        dto.LastId = this.TransferLogParams.LastId;
        dto.PageSize = this.TransferLogParams.PageSize;
        dto.MemberId = memberId;
        this.webApi.Post(Config_1.GetTransferLogApi, dto).then((data) => {
            console.log("GetTransferLog Success", data);
            if (data) {
                let length = data.length;
                if (data.length < this.ChildScoreListParams.PageSize) {
                    this.TransferLogParams.IsNoMore = true;
                }
                else {
                    this.TransferLogParams.LastId = data[length - 1].MemberId;
                }
                this.TransferLogParams.IsLoading = false;
                handler(data, [memberId, isRefresh]);
            }
        }, (error) => {
            this.TransferLogParams.IsLoading = false;
            console.log("GetTransferLog error", error);
            handler(null, [memberId, isRefresh], error);
        });
    }
    /**
     * 获取子会员信息
     * @param memberId 会员ID
     * @param handler 回调
     */
    GetMemberInfo(memberId, handler) {
        let dto = {
            MemberId: memberId
        };
        this.webApi.Post(Config_1.GetMemberInfoApi, dto).then((data) => {
            console.log("GetMemberInfo Success", data);
            if (data) {
                handler(data, [memberId]);
            }
        }, (error) => {
            console.log("GetMemberInfo error", error);
            handler(null, [memberId], error);
        });
    }
    /**
     * 设置备注
     * @param memberId 会员id
     * @param remark 备注
     * @param handler 回调
     */
    SetRemark(memberId, remark, handler) {
        let dto = {
            MemberId: memberId,
            Remark: remark
        };
        this.webApi.Post(Config_1.SetRemarkApi, dto).then((data) => {
            console.log("SetRemark Success", data);
            handler(null, [memberId, remark]);
        }, (error) => {
            console.log("SetRemark error", error);
            handler(null, [memberId, remark], error);
        });
    }
    /**
     * 设置子会员状态
     * @param memberId 会员id
     * @param close 关闭状态
     * @param handler 回调
     */
    UpdateCloseStatus(memberId, close, handler) {
        let dto = {
            MemberId: memberId,
            Close: close
        };
        this.webApi.Post(Config_1.UpdateCloseStatusApi, dto).then((data) => {
            console.log("UpdateCloseStatus Success", data);
            handler(null, [memberId, close]);
        }, (error) => {
            console.log("UpdateCloseStatus error", error);
            handler(null, [memberId, close], error);
        });
    }
    /**
     * 进分
     * @param memberId 会员id
     * @param amount 分数
     * @param handler 回调
     */
    TransferIn(memberId, amount, handler) {
        //进分值必须大于0
        if (typeof amount !== "number" || amount <= 0) {
            handler(null, [memberId, amount], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.AmountError));
            return;
        }
        let dto = {
            MemberId: memberId,
            Amount: amount
        };
        this.webApi.Post(Config_1.TransferInApi, dto).then((data) => {
            console.log("TransferIn Success", data);
            handler(null, [memberId, amount]);
        }, (error) => {
            console.log("TransferIn error", error);
            handler(null, [memberId, amount], error);
        });
    }
    /**
     * 出分
     * @param memberId 会员id
     * @param amount 分数
     * @param handler 回调
     */
    TransferOut(memberId, amount, handler) {
        //出分值必须大于0
        if (typeof amount !== "number" || amount <= 0) {
            handler(null, [memberId, amount], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.AmountError));
            return;
        }
        let dto = {
            MemberId: memberId,
            Amount: amount
        };
        this.webApi.Post(Config_1.TransferOutApi, dto).then((data) => {
            console.log("TransferOut Success", data);
            handler(null, [memberId, amount]);
        }, (error) => {
            console.log("TransferOut error", error);
            handler(null, [memberId, amount], error);
        });
    }
    /**
     * 设置子会员密码
     * @param memberId 会员id
     * @param password 密码
     * @param handler 回调
     */
    SetChildPassword(memberId, password, handler) {
        //出分值必须大于0
        if (!Verification_1.default.Password(password)) {
            handler(null, [memberId, password], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.PasswordFormatError));
            return;
        }
        let dto = {
            MemberId: memberId,
            Password: password
        };
        this.webApi.Post(Config_1.SetChildPasswordApi, dto).then((data) => {
            console.log("SetChildPassword Success", data);
            handler(null, [memberId, password]);
        }, (error) => {
            console.log("SetChildPassword error", error);
            handler(null, [memberId, password], error);
        });
    }
}
exports.default = MemberCtrl;
//# sourceMappingURL=MemberCtrl.js.map