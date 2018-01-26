"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ScoreRecordCtrl_1 = require("../../../Controller/ScoreRecordCtrl");
const scoreRecordStyle = require("./style.css");
class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.ScoreRecordCtrl = new ScoreRecordCtrl_1.default();
        this.Handler = (data, isRefresh, error) => {
            if (error) {
                //todo 提示错误信息
                return;
            }
            if (isRefresh) {
                this.setState({ scoreRecordList: data });
            }
            else {
                this.setState({ scoreRecordList: this.state.scoreRecordList.concat(data) });
            }
        };
        this.renderRowItem = (item, index) => {
            return (React.createElement("div", { key: index, className: scoreRecordStyle.row },
                React.createElement("div", { className: scoreRecordStyle.time }, item.UpdateTime),
                React.createElement("div", { className: scoreRecordStyle.id }, item.ID),
                React.createElement("div", { className: scoreRecordStyle.change }, item.Changed),
                React.createElement("div", { className: scoreRecordStyle.message }, JSON.parse(item.Remark).Message)));
        };
        this.state = {
            scoreRecordList: []
        };
    }
    componentDidMount() {
        this.ScoreRecordCtrl.GetScoreRecord(true, this.Handler);
    }
    render() {
        let { scoreRecordList } = this.state;
        return (React.createElement("div", null, scoreRecordList.map((item, index) => {
            return this.renderRowItem(item, index);
        })));
    }
}
exports.default = MemberList;
//# sourceMappingURL=index.js.map