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
var style = require("./css/alert.css");
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        return _super.call(this, props) || this;
    }
    Alert.prototype.render = function () {
        return this.props.alert ? (React.createElement("div", { className: style.alertContainer },
            React.createElement("h3", { className: style.alertTitle }, "\u6807\u9898"),
            React.createElement("div", { className: style.alertContent }, "\u63D0\u793A\u4FE1\u606F"),
            React.createElement("div", { className: style.alertBtn },
                React.createElement("div", { className: style.alertBtnSure }, "\u786E\u5B9A"),
                React.createElement("div", { className: style.alertBtnCancle }, "\u53D6\u6D88")))) : null;
    };
    return Alert;
}(React.Component));
exports.default = Alert;
//# sourceMappingURL=Alert.js.map