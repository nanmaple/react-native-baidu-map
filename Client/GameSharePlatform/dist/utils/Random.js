"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    /**
     * 生成一个随机数
     * @param start 随机数开始数，包含该数
     * @param end 随机数结尾数，包含该数
     */
    static Get(start, end) {
        return Math.round(Math.random() * (end - start) + start);
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.js.map