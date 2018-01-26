"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const MemberCtrl_1 = require("../../../Controller/MemberCtrl");
const GameRecordCtrl_1 = require("../../../Controller/GameRecordCtrl");
const Money_1 = require("../../../Utils/Money");
const Config_1 = require("../../../Route/Config");
const memberListStyle = require("./style.css");
class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.memberCtrl = new MemberCtrl_1.default();
        this.memberCtrls = new GameRecordCtrl_1.default();
        this.Handler = (data, isRefresh, error) => {
            if (error) {
                //todo 提示错误信息
                return;
            }
            if (isRefresh) {
                this.setState({ memberList: data });
            }
            else {
                this.setState({ memberList: this.state.memberList.concat(data) });
            }
        };
        /**
         * 单行点击回调
         */
        this.MemberListClick = (memberId) => {
        };
        /**
         * 渲染每行数据
         */
        this.renderMemberItem = (rowItem, index) => {
            return (React.createElement(react_router_dom_1.Link, { to: `${Config_1.GetMemberDetailRoute(rowItem.MemberId)}`, key: index, className: memberListStyle.rowItem },
                React.createElement("div", { className: memberListStyle.nickName },
                    rowItem.Nickname,
                    rowItem.Remark ? "(" + rowItem.Remark + ")" : ""),
                React.createElement("div", { className: memberListStyle.score },
                    "\u5206\u6570:",
                    Money_1.default.Format(rowItem.Score))));
        };
        this.state = {
            memberList: []
        };
    }
    componentDidMount() {
        this.memberCtrl.GetChildScoreList(true, this.Handler);
    }
    render() {
        let { memberList } = this.state;
        if (!memberList || memberList.length == 0) {
            return (React.createElement("div", null, "\u65E0\u6570\u636E"));
        }
        return (React.createElement("div", null, memberList.map((item, index) => {
            return this.renderMemberItem(item, index);
        })));
    }
}
exports.default = MemberList;
//# sourceMappingURL=index.js.map