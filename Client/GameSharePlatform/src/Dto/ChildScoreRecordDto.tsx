export class ListParamsDto {
    /**
     * 上一页查询最后一条数据的ID
     * 默认为null
     */
    public LastId: number = null;
    /**
     * 每页条数
     */
    public PageSize: number = 10;
    /**
     * 会员ID
    */
    public MemberId: number = null;

}

export class ListParamsCtrlDto extends ListParamsDto {
    /**
     * 是否正在加载
     */
    public IsLoading: boolean = false;

    /**
     * 无更多数据
     */
    public IsNoMore: boolean = false;
}

export class ScoreRecordDto {
    /**
     * 变化数目
     */
    public Changed: number;
    /**
     * id
     */
    public Id: number;
    /**
     * 备注
     */
    public Remark: string;
    /**
     * 时间
     */
    public UpdateTime: string;
}