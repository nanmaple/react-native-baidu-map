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
var memberListStyle = require("./MemberList.css");
var MemberList = /** @class */ (function (_super) {
    __extends(MemberList, _super);
    function MemberList(props) {
        var _this = _super.call(this, props) || this;
        _this.renderMemberItem = function (rowItem, index) {
            return (React.createElement("div", { key: index, className: memberListStyle.rowItem, onClick: function () { return _this.props.memberListClick(rowItem); } },
                React.createElement("div", { className: memberListStyle.nickName }, "\u6635\u79F0(\u5907\u6CE8)"),
                React.createElement("div", { className: memberListStyle.score }, "\u5206\u6570:1000")));
        };
        return _this;
    }
    MemberList.prototype.render = function () {
        var _this = this;
        var memberList = this.props.memberList;
        return (React.createElement("div", null, memberList.map(function (item, index) {
            return _this.renderMemberItem(item, index);
        })));
    };
    return MemberList;
}(React.Component));
exports.default = MemberList;
//# sourceMappingURL=MemberList.js.map