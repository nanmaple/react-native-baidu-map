interface IView{
    /**
     * 刷新页面
     */
    Refresh(data?:any):void;
    /**
     * 设置UI数据
     */
    Set(data: any, type?:any):void;
}