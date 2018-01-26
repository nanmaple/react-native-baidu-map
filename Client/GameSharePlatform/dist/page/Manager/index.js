"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Config_1 = require("../../Route/Config");
const TabView_1 = require("../../Components/TabView/TabView");
const Member_1 = require("./Member");
const GameRecord_1 = require("./GameRecord");
const index_1 = require("./Report/index");
const ScoreRecord_1 = require("./ScoreRecord");
const managerStyle = require("./style.css");
class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.tabList = ["会员", "游戏记录", "报表", "分数记录"];
        this.tabClick = (index) => {
            this.setState({
                selectedIndex: index
            });
            switch (index) {
                case 0:
                    this.props.history.replace(Config_1.MemberRoute);
                    break;
                case 1:
                    this.props.history.replace(Config_1.GameRecordRoute);
                    break;
                case 2:
                    this.props.history.replace(Config_1.ReportRoute);
                    break;
                case 3:
                    this.props.history.replace(Config_1.ScoreRecordRoute);
                    break;
                default:
                    this.props.history.replace(Config_1.MemberRoute);
                    break;
            }
        };
        this.state = {
            selectedIndex: 0
        };
        this.tabClick = this.tabClick.bind(this);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(TabView_1.default, { tabList: this.tabList, tabClick: this.tabClick }),
            React.createElement("div", { className: managerStyle.content },
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.MemberRoute, component: Member_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.GameRecordRoute, component: GameRecord_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.ReportRoute, component: index_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: Config_1.ScoreRecordRoute, component: ScoreRecord_1.default }))));
    }
}
exports.default = Manager;
//# sourceMappingURL=index.js.map