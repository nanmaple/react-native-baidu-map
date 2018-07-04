interface IView{
    /**
     * 刷新页面
     */
    Refresh():void;
    /**
     * 设置UI数据
     */
    Set(data: any):void;
}