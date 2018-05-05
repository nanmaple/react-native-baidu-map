var ScenePanel;
(function (ScenePanel) {
    var CardPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function CardPanelBaseUI(isHor) {
            this.pokerNum = 3; //扑克的数量
            this.pokerCards = []; //扑克类数组
            if (isHor) {
                this.ui = new ui.CardPanelUI();
            }
            else {
                this.ui = new ui.CardPanel_VerUI();
            }
            this.ui.zOrder = 2;
            //循环创建扑克牌数组
            for (var i = 0; i < this.pokerNum; i++) {
                var poker = this.ui.goal.getChildByName("poker" + i);
                var pokerEffect = new PokerEffect(poker);
                this.pokerCards.push(pokerEffect);
            }
        }
        /**
         * 获取UI
         */
        CardPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 初始化扑克牌
         * @param data
         * @param index
         */
        CardPanelBaseUI.prototype.InitPoker = function (data, index) {
            this.pokerCards[index].InitPoker(data);
        };
        /**
         * 显示扑克牌
         * @param data
         * @param index
         */
        CardPanelBaseUI.prototype.ShowPoker = function (data, index) {
            this.pokerCards[index].ShowPoker(data);
        };
        /**
         * 开始翻转扑克牌
         * @param data
         * @param index
         */
        CardPanelBaseUI.prototype.StartFlipPoker = function (data, index) {
            this.pokerCards[index].StartFlipPoker(data);
        };
        /**
         * 扑克牌翻转结束回调
         */
        CardPanelBaseUI.prototype.EndFlipPokerHander = function (endPokerHander) {
            this.pokerCards[2].EndFlipPokerHander(endPokerHander, 2);
        };
        /**
         * 清理扑克牌缓动
         */
        CardPanelBaseUI.prototype.ClearPokerTween = function () {
            for (var i = 0; i < this.pokerNum; i++) {
                this.pokerCards[i].ClearPoker();
            }
        };
        /**
         * 隐藏扑克牌
         * @param index
         */
        CardPanelBaseUI.prototype.HidePoker = function (index) {
            this.pokerCards[index].HidePoker();
        };
        /**
         * 获取球门宽度
         */
        CardPanelBaseUI.prototype.GetGoalWidth = function () {
            return this.ui.goal.width;
        };
        /**
         * 获取球门高度
         */
        CardPanelBaseUI.prototype.GetGoalHeight = function () {
            return this.ui.goal.height;
        };
        /**
         * 获取球门中心偏移量
         */
        CardPanelBaseUI.prototype.GetGoalCenterX = function () {
            return this.ui.goal.centerX;
        };
        /**
         * 获取球门距离底部位置
         */
        CardPanelBaseUI.prototype.GetGoalBottom = function () {
            return this.ui.goal.bottom;
        };
        return CardPanelBaseUI;
    }());
    ScenePanel.CardPanelBaseUI = CardPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
