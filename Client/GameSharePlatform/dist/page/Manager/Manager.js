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
var TabView_1 = require("../components/TabView/TabView");
var MemberList_1 = require("./component/MemberList");
var tabList = ["会员", "游戏记录", "报表", "分数记录"];
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.tabClick = function (index) {
            _this.setState({
                selectedIndex: index
            });
        };
        _this.memberListClick = function (item) {
            //路由跳转
            console.log(item);
        };
        _this.renderMemberList = function () {
            return (React.createElement(MemberList_1.default, { memberList: [1, 2, 3], memberListClick: _this.memberListClick }));
        };
        _this.renderGameRecord = function () {
            console.log("记录");
            return (React.createElement("div", null, "\u6E38\u620F\u8BB0\u5F55"));
        };
        _this.renderReport = function () {
            return (React.createElement("div", null, "\u62A5\u8868"));
        };
        _this.renderScoreRecord = function () {
            return (React.createElement("div", null, "\u5206\u6570\u8BB0\u5F55"));
        };
        _this.renderDetail = function (index) {
            switch (index) {
                case 0:
                    return _this.renderMemberList();
                case 1:
                    return _this.renderGameRecord();
                case 2:
                    return _this.renderReport();
                case 3:
                    return _this.renderScoreRecord();
                default:
                    return null;
            }
        };
        _this.state = {
            selectedIndex: 0
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "memberManage" },
            React.createElement(TabView_1.default, { tabList: tabList, tabClick: this.tabClick }),
            React.createElement("div", null, this.renderDetail(this.state.selectedIndex))));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Manager.js.map