import { GetScoreLogsApi } from './Config';

import { ListParamsDto, ListParamsCtrlDto, ScoreRecordDto } from '../Dto/ScoreRecordDto';

import BaseCtrl from '../Base/BaseCtrl';
export default class ScoreRecordCtrl extends BaseCtrl {



    /**
     * 获取所有子级会员分数参数
     */
    private ChildScoreListParams: ListParamsCtrlDto = new ListParamsCtrlDto();
    constructor() {
        super();
    }

    /**
    * 获取所有子级会员分数
    * @param isRefresh 是否刷新
    * @param handler 回调
    */
    public GetScoreRecord(isRefresh: boolean, handler: Function): void {
        if (this.ChildScoreListParams.IsLoading) {
            return;
        }
        this.ChildScoreListParams.IsLoading = true;
        if (isRefresh) {
            this.ChildScoreListParams.LogId = null;
            this.ChildScoreListParams.IsNoMore = false;
        }

        let dto: ListParamsDto = new ListParamsDto();
        dto.LogId = this.ChildScoreListParams.LogId;
        dto.PageSize = this.ChildScoreListParams.PageSize;
        dto.TransactionType = 1;
        dto.Desc = true;

        this.webApi.Post(GetScoreLogsApi, dto).then((data: Array<ScoreRecordDto>) => {
            console.log("GetChildScoreList Success", data);
            if (data) {
                let length = data.length;
                if (data.length < this.ChildScoreListParams.PageSize) {
                    this.ChildScoreListParams.IsNoMore = true;
                } else {
                    //this.ChildScoreListParams.LogId = data[length - 1].MemberId;
                }
                this.ChildScoreListParams.IsLoading = false;
                handler(data, [isRefresh]);
            }
        }, (error: string) => {
            this.ChildScoreListParams.IsLoading = false;
            console.log("GetChildScoreList error", error);
            handler(null, [isRefresh], error);
        })
    }

}