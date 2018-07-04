/// <reference path="./BaseLoadingView.ts"/>
/// <reference path="../IView.ts"/>
class LoadingView extends BaseLoadingView implements IView {
    constructor() {
        super();
    }

    /**
     * 显示loading
     */
    public ShowLoading(txt: string): void {
        this.loadingShow = true;
        this.loadingTxt = LanguageUtils.Language.Get(txt);
        if (!this.ui) {
            return;
        }
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
    }

    /**
     * 隐藏loading
     */
    public HideLoading(): void {
        this.loadingShow = false;
        if (!this.ui) {
            return;
        }
        this.ui.visible = this.loadingShow;
    }

    /**
     * Loading加载处理
     * @param data 
     */
    public Set(data: BaseDto.GameModalDto): void {
        switch (data.Type) {
            case BaseEnum.GameModalEnum.Close:
                this.HideLoading();
                break;
            case BaseEnum.GameModalEnum.Open:
                this.ShowLoading("ConnectService");
                break;
            case BaseEnum.GameModalEnum.Msg:
                this.ShowLoading(data.Data);
                break;
            case BaseEnum.GameModalEnum.LoginOut:
                this.ShowLoading("AccountLoginOut");
                break;
            case BaseEnum.GameModalEnum.MemClose:
                this.ShowLoading("MemberClosed");
                break;
            default:
                break;
        }
    }

    /**
     * 刷新
     */
    public Refresh(): void {

    }

}
