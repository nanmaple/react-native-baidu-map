var ScenePanel;
(function (ScenePanel) {
    var LoadingPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function LoadingPanelBaseUI(isHor) {
            if (isHor) {
                this.ui = new ui.LoadingUI();
            }
            else {
                this.ui = new ui.Loading_VerUI();
            }
            this.ui.zOrder = 9;
            this.ui.cacheAs = "bitmap";
            this.ui.visible = false;
            this.ui.on(Laya.Event.CLICK, this, function () {
            });
            this.uiData = ScenePanel.LoadingPanelUIData.GetInstance();
            if (this.uiData && this.uiData.showLoading) {
                this.ShowLoading();
            }
            if (this.uiData && this.uiData.showConnect) {
                this.ShowConnect();
            }
        }
        /**
         * 获取UI
         */
        LoadingPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 显示loading
         */
        LoadingPanelBaseUI.prototype.ShowLoading = function () {
            this.uiData.showLoading = true;
            this.ui.visible = this.uiData.showLoading;
            this.ui.loadingAni.play();
        };
        /**
         * 隐藏loading
         */
        LoadingPanelBaseUI.prototype.HideLoading = function () {
            this.uiData.showLoading = false;
            this.ui.visible = this.uiData.showLoading;
            this.ui.loadingAni.stop();
        };
        /**
         * 显示Connect Server
         */
        LoadingPanelBaseUI.prototype.ShowConnect = function () {
            this.uiData.showConnect = true;
            this.ui.visible = this.uiData.showConnect;
            this.ui.connectServer.visible = true;
            this.ui.loadingAni.visible = false;
        };
        /**
         * 隐藏Connect Server
         */
        LoadingPanelBaseUI.prototype.HideConnect = function () {
            this.uiData.showConnect = false;
            this.ui.visible = this.uiData.showConnect;
            this.ui.connectServer.visible = false;
            this.ui.loadingAni.visible = true;
        };
        return LoadingPanelBaseUI;
    }());
    ScenePanel.LoadingPanelBaseUI = LoadingPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
