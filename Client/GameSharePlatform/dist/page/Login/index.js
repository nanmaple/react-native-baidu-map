"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const UserCtrl_1 = require("../../Controller/UserCtrl");
const Base_1 = require("../../Base");
const Config_1 = require("../../Route/Config");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.userCtrl = new UserCtrl_1.default();
        this.LoginCallback = (response) => {
            if (response.Result == Base_1.ResultEnum.LOGIN) {
                //登录成功，获取会员信息
                this.userCtrl.GetMemberInfo(this.Redirect);
            }
            else if (response.Result == Base_1.ResultEnum.MULTI) {
                this.setState({ accountList: response.Data });
            }
            else if (response.Result == Base_1.ResultEnum.ERROR) {
                this.Redirect();
            }
            else if (response.Result == Base_1.ResultEnum.NO) {
                this.Redirect();
            }
        };
        /**
         * 重定向
         */
        this.Redirect = () => {
            this.props.history.push(Config_1.HomeRoute);
        };
        /**
         * 选中回调
         * @param index 编号
         */
        this.onSelect = (memberID) => {
            this.userCtrl.LoginByID(memberID, this.LoginCallback);
        };
        this.renderLogin = () => {
            if (this.state.accountList && this.state.accountList.length > 0) {
                return (React.createElement("ul", null, this.state.accountList.map((item) => {
                    return (React.createElement("li", { className: "", key: item.MemberId, onClick: () => { this.onSelect(item.MemberId); } },
                        React.createElement("div", { className: "fx1" },
                            "\u8D26\u53F7\uFF1A",
                            item.Account),
                        React.createElement("div", { className: "fx1 text-right" },
                            "\u4EE3\u7406\uFF1A",
                            item.ParentNickname)));
                })));
            }
            else {
                return (React.createElement("div", null, "\u767B\u5F55\u4E2D..."));
            }
        };
        this.state = {
            accountList: []
        };
    }
    componentWillMount() {
        this.userCtrl.Login(this.LoginCallback);
    }
    render() {
        return (React.createElement("div", { className: "login" }, this.renderLogin()));
    }
}
exports.default = Home;
//# sourceMappingURL=index.js.map