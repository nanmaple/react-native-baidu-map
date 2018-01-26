"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const UserCtrl_1 = require("../../Controller/UserCtrl");
const Config_1 = require("../../Route/Config");
const Money_1 = require("../../Utils/Money");
const logoImg = require("../../Style/Image/logo.png");
const style = require("./style.css");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.userCtrl = new UserCtrl_1.default();
        this.tabClick = (index) => {
            console.log(index);
        };
        this.renderBtn = () => {
            if (!this.state.isLogin) {
                return (React.createElement(react_router_dom_1.Link, { to: Config_1.MemberRoute, className: style.button }, "\u5173\u6CE8"));
            }
            else if (this.state.isClose) {
                return null;
            }
            else {
                return (React.createElement(react_router_dom_1.Link, { to: Config_1.MemberRoute, className: style.button }, "\u7BA1\u7406"));
            }
        };
        this.state = {
            isLogin: this.userCtrl.IsLogin(),
            isClose: this.userCtrl.IsClose(),
            memberInfo: this.userCtrl.GetMemberInfoByLocal()
        };
    }
    render() {
        return (React.createElement("div", { className: "home" },
            React.createElement("div", { className: style.header },
                React.createElement("div", { className: style.info },
                    React.createElement("img", { src: logoImg, alt: "", className: style.logo }),
                    this.state.isLogin ? (React.createElement("label", { htmlFor: "" }, "分数：" + Money_1.default.Format(this.state.memberInfo.Score))) : null),
                React.createElement("div", { className: style.manager }, this.renderBtn())),
            React.createElement(react_router_dom_1.Link, { to: Config_1.MemberRoute, className: style.button }, "\u4F1A\u5458\u7BA1\u7406")));
    }
}
exports.default = Home;
//# sourceMappingURL=index.js.map