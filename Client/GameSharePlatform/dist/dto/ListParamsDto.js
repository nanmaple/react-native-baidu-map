"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListParamsDto {
    constructor() {
        /**
         * 上一页查询最后一条数据的ID
         * 默认为null
         */
        this.LastId = null;
        /**
         * 每页条数
         */
        this.PageSize = 10;
    }
}
exports.ListParamsDto = ListParamsDto;
class ListParamsCtrlDto extends ListParamsDto {
    constructor() {
        super(...arguments);
        /**
         * 是否正在加载
         */
        this.IsLoading = false;
        /**
         * 无更多数据
         */
        this.IsNoMore = false;
    }
}
exports.ListParamsCtrlDto = ListParamsCtrlDto;
class TransferLogDto extends ListParamsDto {
}
exports.TransferLogDto = TransferLogDto;
class TransferLogCtrlDto extends ListParamsCtrlDto {
}
exports.TransferLogCtrlDto = TransferLogCtrlDto;
//# sourceMappingURL=ListParamsDto.js.map