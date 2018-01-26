"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PullLoad_1 = require("../../../components/PullList/PullLoad");
var constants_1 = require("../../../components/PullList/constants");
var pullStyle = require("../../../components/css/PullList.css");
var defaultStyle = {
    width: "100%",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "1.5"
};
var loadMoreLimitNum = 2;
var cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
];
var PullList = /** @class */ (function (_super) {
    __extends(PullList, _super);
    function PullList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAction = function (action) {
            console.info(action, _this.state.action, action === _this.state.action);
            //new action must do not equel to old action
            if (action === _this.state.action ||
                action === constants_1.STATS.refreshing && _this.state.action === constants_1.STATS.loading ||
                action === constants_1.STATS.loading && _this.state.action === constants_1.STATS.refreshing) {
                console.info("It's same action or on loading or on refreshing ", action, _this.state.action, action === _this.state.action);
                return false;
            }
            if (action === constants_1.STATS.refreshing) {
                setTimeout(function () {
                    //refreshing complete
                    _this.setState({
                        data: cData,
                        hasMore: true,
                        action: constants_1.STATS.refreshed,
                        index: loadMoreLimitNum
                    });
                }, 3000);
            }
            else if (action === constants_1.STATS.loading) {
                _this.setState({
                    hasMore: true
                });
                setTimeout(function () {
                    if (_this.state.index === 0) {
                        _this.setState({
                            action: constants_1.STATS.reset,
                            hasMore: false
                        });
                    }
                    else {
                        _this.setState({
                            data: _this.state.data.concat([cData[0], cData[0]]),
                            action: constants_1.STATS.reset,
                            index: _this.state.index - 1
                        });
                    }
                }, 3000);
            }
            //DO NOT modify below code
            _this.setState({
                action: action
            });
        };
        _this.state = {
            hasMore: true,
            data: cData,
            action: constants_1.STATS.init,
            index: loadMoreLimitNum //loading more test time limit
        };
        return _this;
    }
    PullList.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.location != this.props) {
            console.log(this.props);
            var type = nextProps.location.pathname.split("/")[3];
            console.log(type);
        }
    };
    PullList.prototype.render = function () {
        var _a = this.state, data = _a.data, hasMore = _a.hasMore;
        return (React.createElement("div", null,
            React.createElement(PullLoad_1.default, { className: "block", isBlockContainer: true, downEnough: 150, action: this.state.action, handleAction: this.handleAction, hasMore: hasMore, distanceBottom: 1000 },
                React.createElement("ul", { className: pullStyle.test_ul }, data.map(function (str, index) {
                    return React.createElement("li", { key: index },
                        React.createElement("img", { src: str, alt: "" }));
                })))));
    };
    return PullList;
}(React.Component));
exports.default = PullList;
//# sourceMappingURL=recordList.js.map