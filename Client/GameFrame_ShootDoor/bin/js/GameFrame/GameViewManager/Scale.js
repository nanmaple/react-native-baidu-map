var GameViewUtil;
(function (GameViewUtil) {
    /**
    * 元素缩放
    * @param el 元素
    * @param isVer 是否为竖屏Ver
    */
    function ScaleEl(el, isVer) {
        if (isVer === void 0) { isVer = false; }
        if (isVer) {
            if (GameConfig.RatioType) {
                el.scale(GameConfig.LengthShort, 1);
            }
            else {
                el.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            if (GameConfig.RatioType) {
                el.scale(1, GameConfig.LengthShort);
            }
            else {
                el.scale(GameConfig.ShortLength, 1);
            }
        }
        return el;
    }
    GameViewUtil.ScaleEl = ScaleEl;
    /**
     * 横向x轴缩放
     * @param num 待缩放x轴数据
     * @param isVer 是否为竖屏Ver
     */
    function ScaleX(num, isVer) {
        if (isVer === void 0) { isVer = false; }
        if (isVer && GameConfig.RatioType) {
            num = num * GameConfig.LengthShort;
        }
        else if (!GameConfig.RatioType) {
            num = num * GameConfig.ShortLength;
        }
        return num;
    }
    GameViewUtil.ScaleX = ScaleX;
    /**
     * 横向y轴缩放
     * @param num 待缩放y轴数据
     * @param isVer 是否为竖屏Ver
     */
    function ScaleY(num, isVer) {
        if (isVer === void 0) { isVer = false; }
        if (isVer && !GameConfig.RatioType) {
            num = num * GameConfig.ShortLength;
        }
        else if (GameConfig.RatioType) {
            num = num * GameConfig.LengthShort;
        }
        return num;
    }
    GameViewUtil.ScaleY = ScaleY;
    /**
     * 横向y轴缩放
     * @param num 待缩放y轴数据
     * @param isVer 是否为竖屏Ver
     */
    function DistanceTop(height, isVer, suby) {
        if (isVer === void 0) { isVer = false; }
        var num = 0;
        if (isVer) {
            if (GameConfig.RatioType) {
                num = GameConfig.DesignLength - height;
            }
            else {
                num = GameConfig.DesignLength - height * GameConfig.ShortLength;
                suby && suby * GameConfig.ShortLength;
            }
        }
        else {
            if (GameConfig.RatioType) {
                num = GameConfig.DesignShort - height * GameConfig.LengthShort;
                suby && suby * GameConfig.LengthShort;
            }
            else {
                num = GameConfig.DesignShort - height;
            }
        }
        return num + (suby ? suby : 0);
    }
    GameViewUtil.DistanceTop = DistanceTop;
})(GameViewUtil || (GameViewUtil = {}));
//# sourceMappingURL=Scale.js.map