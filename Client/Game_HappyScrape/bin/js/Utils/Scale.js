/**
 * 工具类-缩放算法
 */
var Utils;
(function (Utils) {
    var Scale = (function () {
        function Scale() {
        }
        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后宽度不变，用于横屏模式，求得缩放后高度缩放放比例
         * @param width 缩放前宽
         * @param height 缩放前高
         * @param sWidth 缩放后宽
         * @param sHeight 缩放后高
         */
        Scale.ScaleHeight = function (width, height, sWidth, sHeight) {
            //缩放后的宽度比
            var scaleRX = width / sWidth;
            //缩放后的高度比
            var scaleRY = height / sHeight;
            //宽度不变，高度缩放比，
            return scaleRY / scaleRX;
        };
        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后宽度缩放放比例
         * @param width 缩放前宽
         * @param height 缩放前高
         * @param sWidth 缩放后宽
         * @param sHeight 缩放后高
         */
        Scale.ScaleWidth = function (width, height, sWidth, sHeight) {
            //缩放后的宽度比
            var scaleRX = width / sWidth;
            //缩放后的高度比
            var scaleRY = height / sHeight;
            //高度不变，宽度缩放比，
            return scaleRX / scaleRY;
        };
        /**
         * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后y的坐标
         * @param x 原始Y坐标
         * @param width 缩放前高
         * @param sWidth 缩放后高
         * @param scale 屏幕缩放比例
         */
        Scale.ScaleX = function (x, width, sWidth, scale) {
            //缩放后的宽度比
            var scaleRX = (sWidth * scale) / width;
            //高度不变，宽度缩放比，求y坐标
            return x * scaleRX;
        };
        /**
        * 缩放前后宽高固定，保持缩放前的比例且缩放后高度度不变，用于竖屏模式，求得缩放后y的坐标
        * @param y 原始Y坐标
        * @param height 缩放前高
        * @param sHeight 缩放后高
         * @param scale 屏幕缩放比例
        */
        Scale.ScaleY = function (y, height, sHeight, scale) {
            //缩放后的高度比
            var scaleRY = (sHeight * scale) / height;
            //高度不变，宽度缩放比，求y坐标
            return y * scaleRY;
        };
        return Scale;
    }());
    Utils.Scale = Scale;
})(Utils || (Utils = {}));
//# sourceMappingURL=Scale.js.map