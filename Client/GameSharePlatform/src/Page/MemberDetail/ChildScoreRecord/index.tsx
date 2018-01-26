import * as React from 'react';
import ScoreRecordCtrl from '../../../Controller/ChildScoreRecordCtrl';
import { withRouter } from 'react-router-dom';

const scoreRecordStyle = require("./style.css");

class MemberList extends React.Component<any, any> {
    private ScoreRecordCtrl: ScoreRecordCtrl = new ScoreRecordCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            scoreRecordList: []
        }
    }
    componentDidMount() {
        let memberId = this.props.match.params.memberId;
        this.ScoreRecordCtrl.GetScoreRecord(memberId, true, this.Handler);
    }

    public Handler = (data: any, isRefresh: boolean, error?: string): void => {
        if (error) {
            //todo 提示错误信息
            return;
        }
        console.log(data);
        if (isRefresh) {
            this.setState({ scoreRecordList: data });
        } else {
            this.setState({ scoreRecordList: this.state.scoreRecordList.concat(data) });
        }

    }
    public renderRowItem = (item: any, index: any) => {
        return (
            <div key={index} className={scoreRecordStyle.row}>
                {item}
            </div>
        )
    }
    render() {
        let { scoreRecordList } = this.state;
        return (
            <div>
                {
                    scoreRecordList.map((item: any, index: any) => {
                        return this.renderRowItem(item, index);
                    })
                }
            </div>
        );
    }
}

export default withRouter(MemberList);