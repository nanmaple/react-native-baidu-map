namespace Utils{
    export class Bezier{
        /**
         * 贝塞尔曲线运动坐标位置
         * @param t t-(0,1)
         * @param stx 起始点x
         * @param stY 起始点y
         * @param kongzhiX 拉力点x 
         * @param kongzhiY 拉力点y
         * @param endX 结束点x
         * @param endY 结束点y
         */
        static GetBezier(t: number, stx: number = 0, stY: number = 0, kongzhiX: number, kongzhiY: number, endX: number, endY: number): any {
            var tem = 1 - t;
            var tx = tem * tem * stx + 2 * t * tem * kongzhiX + t * t * endX
            var ty = tem * tem * stY + 2 * t * tem * kongzhiY + t * t * endY
            return { x: tx, y: ty };//返回坐标位置
        }
    }
}