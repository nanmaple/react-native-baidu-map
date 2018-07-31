/**
 * 工具类-物理引擎算法
 */
namespace Utils {
    export class Physical {
        /**
     * 获取单位时间内加速度运动的位移
     * @param time 时长
     * @param speed 初始速度
     * @param acceleration 加速度
     */
        static GetHeightByTime(speed: number, time: number, acceleration: number): number {
            let fm1: number = Utils.Float.Mul(speed, time);
            let fm2: number = Utils.Float.Mul(acceleration, time);
            let fm3: number = Utils.Float.Mul(fm2, time);
            let fd1: number = Utils.Float.Div(fm3, 2);
            return Utils.Float.Add(fm1, fd1);
        }

        /**
         * 获取加速度一定时间后的速度
         * @param speed 开始速度
         * @param acceleration 加速度
         * @param time 时长
         */
        static GetSpeed(speed: number, acceleration: number, time: number): number {
            let fm = Utils.Float.Mul(acceleration, time);
            return Utils.Float.Add(speed, fm);
        }

        /**
         * 根据前后速度和加速度，获取时间
         * @param startSpeed 开始速度
         * @param endSpeed 结束速度
         * @param acceleration 加速度
         */
        static GetFrame(startSpeed: number, endSpeed: number, acceleration: number, ): number {
            let fs = Utils.Float.Sub(endSpeed, startSpeed);
            return Utils.Float.Div(fs, acceleration);
        }
    }
}