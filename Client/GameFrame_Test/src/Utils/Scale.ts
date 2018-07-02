module Utils {
    export class Scale {

        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后宽度不变，用于横屏模式，求得缩放后高度缩放放比例
         * @param width 缩放前宽
         * @param height 缩放前高
         * @param sWidth 缩放后宽
         * @param sHeight 缩放后高
         */
        static ScaleHeight(width: number, height: number, sWidth: number, sHeight: number) {
            //缩放后的宽度比
            let scaleRX: number = width / sWidth;
            //缩放后的高度比
            let scaleRY: number = height / sHeight;
            //宽度不变，高度缩放比，
            return scaleRY / scaleRX;
        }

        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后宽度缩放放比例
         * @param width 缩放前宽
         * @param height 缩放前高
         * @param sWidth 缩放后宽
         * @param sHeight 缩放后高
         */
        static ScaleWidth(width: number, height: number, sWidth: number, sHeight: number) {
            //缩放后的宽度比
            let scaleRX: number = width / sWidth;
            //缩放后的高度比
            let scaleRY: number = height / sHeight;
            //高度不变，宽度缩放比，
            return scaleRX / scaleRY;
        }

        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后y的坐标
         * @param x 原始Y坐标
         * @param width 缩放前高
         * @param sWidth 缩放后高
         * @param scale 屏幕缩放比例
         */
        static ScaleX(x: number, width: number, sWidth: number, scale: number) {
            //缩放后的宽度比
            let scaleRX: number = (sWidth * scale) / width;
            //高度不变，宽度缩放比，求y坐标
            return x * scaleRX;
        }

        /**
        * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后y的坐标
        * @param y 原始Y坐标
        * @param height 缩放前高
        * @param sHeight 缩放后高
         * @param scale 屏幕缩放比例
        */
        static ScaleY(y: number, height: number, sHeight: number, scale: number) {
            //缩放后的高度比
            let scaleRY: number = (sHeight * scale) / height;
            //高度不变，宽度缩放比，求y坐标
            return y * scaleRY;
        }
    }
}