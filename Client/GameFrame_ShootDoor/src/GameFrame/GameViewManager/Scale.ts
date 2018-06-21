namespace GameViewUtil {

    /**
    * 元素缩放
    * @param el 元素
    * @param isVer 是否为竖屏Ver
    */
    export function ScaleEl(el: any, isVer: boolean = false) {
        if (isVer) {
            if (GameConfig.RatioType) {
                el.scale(GameConfig.LengthShort, 1);
            } else {
                el.scale(1, GameConfig.ShortLength);
            }
        } else {
            if (GameConfig.RatioType) {
                el.scale(1, GameConfig.LengthShort);
            } else {
                el.scale(GameConfig.ShortLength, 1);
            }
        }
        return el;
    }

    /**
     * 横向x轴缩放
     * @param num 待缩放x轴数据
     * @param isVer 是否为竖屏Ver
     */
    export function ScaleX(num: number, isVer: boolean = false) {
        if (isVer && GameConfig.RatioType) {
            num = num * GameConfig.LengthShort;
        } else if (!GameConfig.RatioType) {
            num = num * GameConfig.ShortLength;
        }
        return num;
    }

    /**
     * 横向y轴缩放
     * @param num 待缩放y轴数据
     * @param isVer 是否为竖屏Ver
     */
    export function ScaleY(num: number, isVer: boolean = false) {
        if (isVer && !GameConfig.RatioType) {
            num = num * GameConfig.ShortLength;
        } else if (GameConfig.RatioType) {
            num = num * GameConfig.LengthShort;
        }
        return num;
    }

    /**
     * 横向y轴缩放
     * @param num 待缩放y轴数据
     * @param isVer 是否为竖屏Ver
     */
    export function DistanceTop(height: number, isVer: boolean = false, suby?: number) {
        let num: number = 0;
        if (isVer) {
            if (GameConfig.RatioType) {
                num = GameConfig.DesignLength - height;
            } else {
                num = GameConfig.DesignLength - height * GameConfig.ShortLength;
                suby && suby * GameConfig.ShortLength;
            }
        } else {
            if (GameConfig.RatioType) {
                num = GameConfig.DesignShort - height * GameConfig.LengthShort;
                suby && suby * GameConfig.LengthShort;
            } else {
                num = GameConfig.DesignShort - height;
            }
        }
        return num + (suby ? suby : 0);
    }
}