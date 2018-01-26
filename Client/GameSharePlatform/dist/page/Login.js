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
var UserCtrl_1 = require("../controller/UserCtrl");
var Base_1 = require("../base/Base");
var config_1 = require("../route/config");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.userCtrl = new UserCtrl_1.default();
        _this.LoginCallback = function (response) {
            if (response.Result == Base_1.ResultEnum.LOGIN) {
                //登录成功，获取会员信息
                _this.userCtrl.GetMemberInfo(_this.Redirect);
            }
            else if (response.Result == Base_1.ResultEnum.MULTI) {
                _this.setState({ accountList: response.Data });
            }
            else if (response.Result == Base_1.ResultEnum.ERROR) {
                _this.Redirect();
            }
            else if (response.Result == Base_1.ResultEnum.NO) {
                _this.Redirect();
            }
        };
        /**
         * 重定向
         */
        _this.Redirect = function () {
            _this.props.history.push(config_1.HomeRoute);
        };
        /**
         * 选中回调
         * @param index 编号
         */
        _this.onSelect = function (memberID) {
            _this.userCtrl.LoginByID(memberID, _this.LoginCallback);
        };
        _this.renderLogin = function () {
            if (_this.state.accountList && _this.state.accountList.length > 0) {
                return (React.createElement("ul", null, _this.state.accountList.map(function (item) {
                    return (React.createElement("li", { className: "", key: item.MemberId, onClick: function () { _this.onSelect(item.MemberId); } },
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
        _this.state = {
            accountList: []
        };
        return _this;
    }
    Home.prototype.componentWillMount = function () {
        this.userCtrl.Login(this.LoginCallback);
    };
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "login" }, this.renderLogin()));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Login.js.map