"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TabView_1 = require("../../../Components/TabView/TabView");
const BaseInforMation_1 = require("./BaseInforMation");
const CheckAccount_1 = require("./CheckAccount");
const ScoreRecord_1 = require("./ScoreRecord");
const memDetailStyle = require("./style.css");
class MemberDetail extends React.Component {
    constructor(props) {
        super(props);
        this.tabList = ["基本信息", "进取分记录", "查账"];
        this.tabClick = (index) => {
            this.setState({
                selectedIndex: index
            });
        };
        this.renderTabContent = (index) => {
            switch (index) {
                case 0:
                    return React.createElement(BaseInforMation_1.default, null);
                case 1:
                    return React.createElement(CheckAccount_1.default, null);
                case 2:
                    return React.createElement(ScoreRecord_1.default, null);
                default:
                    break;
            }
        };
        this.state = {
            selectedIndex: 0
        };
    }
    render() {
        return (React.createElement("div", { className: "hello" },
            React.createElement(TabView_1.default, { tabList: this.tabList, tabClick: this.tabClick }),
            React.createElement("div", { className: memDetailStyle.content }, this.renderTabContent(this.state.selectedIndex))));
    }
}
exports.default = MemberDetail;
//# sourceMappingURL=index.js.map