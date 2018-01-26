"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReportCtrl_1 = require("../../../Controller/ReportCtrl");
const reportStyle = require("./style.css");
class Report extends React.Component {
    constructor(props) {
        super(props);
        this.ReportCtrl = new ReportCtrl_1.default();
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
        this.renderReportItem = (rowItem, index) => {
            return (React.createElement("div", { key: index, className: reportStyle.item }, "\u62A5\u8868"));
        };
        this.state = {
            memberList: []
        };
    }
    componentDidMount() {
        //this.ReportCtrl.GetChildScoreList(true, this.Handler);
    }
    render() {
        let { memberList } = this.state;
        memberList = [1, 2, 3];
        return (React.createElement("div", null, memberList.map((item, index) => {
            return this.renderReportItem(item, index);
        })));
    }
}
exports.default = Report;
//# sourceMappingURL=index.js.map