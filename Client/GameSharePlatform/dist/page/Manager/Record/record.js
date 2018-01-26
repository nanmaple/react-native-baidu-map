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
var recordList_1 = require("./component/recordList");
var recordStyle = require("./record.css");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(props) {
        return _super.call(this, props) || this;
    }
    Manager.prototype.render = function () {
        return (React.createElement("div", { className: recordStyle.hello },
            React.createElement("nav", { className: recordStyle.record_nav },
                React.createElement(react_router_dom_1.NavLink, { to: this.props.match.path + "/home", className: recordStyle.nav_link }, "Home"),
                React.createElement(react_router_dom_1.NavLink, { to: this.props.match.path + "/about", className: recordStyle.nav_link }, "About"),
                React.createElement(react_router_dom_1.NavLink, { to: this.props.match.path + "/my", className: recordStyle.nav_link }, "My")),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: this.props.match.path + "/:type", component: recordList_1.default }),
                React.createElement(react_router_dom_1.Redirect, { to: this.props.match.path + "/home" }))));
    };
    return Manager;
}(React.Component));
exports.default = Manager;
//# sourceMappingURL=record.js.map