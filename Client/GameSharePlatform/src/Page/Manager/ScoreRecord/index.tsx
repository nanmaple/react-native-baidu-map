import * as React from 'react';
import ScoreRecordCtrl from '../../../Controller/ScoreRecordCtrl';

const scoreRecordStyle = require("./style.css");

export default class MemberList extends React.Component<any, any> {
    private ScoreRecordCtrl: ScoreRecordCtrl = new ScoreRecordCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            scoreRecordList: []
        }
    }
    componentDidMount() {
        this.ScoreRecordCtrl.GetScoreRecord(true, this.Handler);
    }

    public Handler = (data: any, isRefresh: boolean, error?: string): void => {
        if (error) {
            //todo 提示错误信息
            return;
        }
        if (isRefresh) {
            this.setState({ scoreRecordList: data });
        } else {
            this.setState({ scoreRecordList: this.state.scoreRecordList.concat(data) });
        }

    }
    public renderRowItem = (item: any, index: any) => {
        return (
            <div key={index} className={scoreRecordStyle.row}>
                <div className={scoreRecordStyle.time}>{item.UpdateTime}</div>
                <div className={scoreRecordStyle.id}>{item.ID}</div>
                <div className={scoreRecordStyle.change}>{item.Changed}</div>
                <div className={scoreRecordStyle.message}>{JSON.parse(item.Remark).Message}</div>
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