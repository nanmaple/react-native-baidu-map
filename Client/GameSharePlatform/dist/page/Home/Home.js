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
var react_router_dom_1 = require("react-router-dom");
var UserCtrl_1 = require("../controller/UserCtrl");
var config_1 = require("../route/config");
var Money_1 = require("../utils/Money");
var logoImg = require("../style/image/logo.png");
var style = require("../style/css/home.css");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.userCtrl = new UserCtrl_1.default();
        _this.tabClick = function (index) {
            console.log(index);
        };
        _this.renderBtn = function () {
            if (!_this.state.isLogin) {
                return (React.createElement(react_router_dom_1.Link, { to: config_1.MemberRoute, className: style.button }, "\u5173\u6CE8"));
            }
            else if (_this.state.isClose) {
                return null;
            }
            else {
                return (React.createElement(react_router_dom_1.Link, { to: config_1.MemberRoute, className: style.button }, "\u7BA1\u7406"));
            }
        };
        _this.state = {
            isLogin: _this.userCtrl.IsLogin(),
            isClose: _this.userCtrl.IsClose(),
            memberInfo: _this.userCtrl.GetMemberInfoByLocal()
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "home" },
            React.createElement("div", { className: style.header },
                React.createElement("div", { className: style.info },
                    React.createElement("img", { src: logoImg, alt: "", className: style.logo }),
                    this.state.isLogin ? (React.createElement("label", { htmlFor: "" }, "分数：" + Money_1.default.Format(this.state.memberInfo.Score))) : null),
                React.createElement("div", { className: style.manager }, this.renderBtn())),
            React.createElement(react_router_dom_1.Link, { to: config_1.MemberRoute, className: style.button }, "\u4F1A\u5458\u7BA1\u7406")));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Home.js.map