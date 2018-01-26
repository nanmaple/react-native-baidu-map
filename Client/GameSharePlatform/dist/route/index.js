"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("../page/Home");
const Manager_1 = require("../Page/Manager");
const Login_1 = require("../page/Login");
const MemberDetail_1 = require("../Page/MemberDetail");
const Config_1 = require("./Config");
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.LoginRoute, component: Login_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.HomeRoute, component: Home_1.default }),
                React.createElement(react_router_dom_1.Route, { path: Config_1.ManagerRoute, component: Manager_1.default }),
                React.createElement(react_router_dom_1.Route, { path: Config_1.MemberDetailRoute, component: MemberDetail_1.default }))));
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map