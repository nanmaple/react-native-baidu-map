var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dto;
(function (Dto) {
    /**
     * 限额
     */
    var LimitDto = /** @class */ (function () {
        function LimitDto() {
        }
        return LimitDto;
    }());
    Dto.LimitDto = LimitDto;
    /**
     * 历史局信息
     */
    var HistoryRoundDto = /** @class */ (function () {
        function HistoryRoundDto() {
        }
        return HistoryRoundDto;
    }());
    Dto.HistoryRoundDto = HistoryRoundDto;
    /**
     * 游戏结果Dto
     */
    var GameResultDto = /** @class */ (function () {
        function GameResultDto() {
        }
        return GameResultDto;
    }());
    Dto.GameResultDto = GameResultDto;
    /**
     * 牌信息
     */
    var CardInfoDto = /** @class */ (function () {
        function CardInfoDto() {
        }
        return CardInfoDto;
    }());
    Dto.CardInfoDto = CardInfoDto;
    /**
     * 游戏结束
     */
    var EndGameDto = /** @class */ (function () {
        function EndGameDto() {
        }
        return EndGameDto;
    }());
    Dto.EndGameDto = EndGameDto;
    /**
     * 初始化游戏Dto
     */
    var InitGameDto = /** @class */ (function () {
        function InitGameDto() {
        }
        return InitGameDto;
    }());
    Dto.InitGameDto = InitGameDto;
    /**
     * 缓存游戏数据Dto
     */
    var CacheGameDto = /** @class */ (function (_super) {
        __extends(CacheGameDto, _super);
        function CacheGameDto() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BetTimeStamp = 0;
            return _this;
        }
        return CacheGameDto;
    }(InitGameDto));
    Dto.CacheGameDto = CacheGameDto;
})(Dto || (Dto = {}));
