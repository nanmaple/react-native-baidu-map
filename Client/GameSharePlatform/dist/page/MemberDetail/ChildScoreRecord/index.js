"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ChildScoreRecordCtrl_1 = require("../../../Controller/ChildScoreRecordCtrl");
const react_router_dom_1 = require("react-router-dom");
const scoreRecordStyle = require("./style.css");
class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.ScoreRecordCtrl = new ChildScoreRecordCtrl_1.default();
        this.Handler = (data, isRefresh, error) => {
            if (error) {
                //todo 提示错误信息
                return;
            }
            console.log(data);
            if (isRefresh) {
                this.setState({ scoreRecordList: data });
            }
            else {
                this.setState({ scoreRecordList: this.state.scoreRecordList.concat(data) });
            }
        };
        this.renderRowItem = (item, index) => {
            return (React.createElement("div", { key: index, className: scoreRecordStyle.row }, item));
        };
        this.state = {
            scoreRecordList: []
        };
    }
    componentDidMount() {
        let memberId = this.props.match.params.memberId;
        this.ScoreRecordCtrl.GetScoreRecord(memberId, true, this.Handler);
    }
    render() {
        let { scoreRecordList } = this.state;
        return (React.createElement("div", null, scoreRecordList.map((item, index) => {
            return this.renderRowItem(item, index);
        })));
    }
}
exports.default = react_router_dom_1.withRouter(MemberList);
//# sourceMappingURL=index.js.map