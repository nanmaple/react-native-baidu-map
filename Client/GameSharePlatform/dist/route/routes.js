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
var Home_1 = require("../page/Home");
var MemberManage_1 = require("../page/MemberManage/MemberManage");
var Login_1 = require("../page/Login");
var config_1 = require("./config");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: config_1.LoginRoute, component: Login_1.default }),
                React.createElement(react_router_dom_1.Route, { path: config_1.HomeRoute, component: Home_1.default }),
                React.createElement(react_router_dom_1.Route, { path: config_1.ManagerRoute, component: MemberManage_1.default }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=routes.js.map