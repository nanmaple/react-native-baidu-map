import * as React from 'react';
import ReportCtrl from '../../../Controller/ReportCtrl';

const reportStyle = require("./style.css");

export default class Report extends React.Component<any, any> {
    private ReportCtrl: ReportCtrl = new ReportCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            memberList: []
        }
    }
    componentDidMount() {
        //this.ReportCtrl.GetChildScoreList(true, this.Handler);
    }

    public Handler = (data: any, isRefresh: boolean, error?: string): void => {
        if (error) {
            //todo 提示错误信息
            return;
        }
        if (isRefresh) {
            this.setState({ memberList: data });
        } else {
            this.setState({ memberList: this.state.memberList.concat(data) });
        }

    }
    renderReportItem = (rowItem: any, index: number) => {
        return (
            <div key={index} className={reportStyle.item}>
                报表
            </div>
        )
    }

    render() {
        let { memberList } = this.state;
        memberList = [1, 2, 3]
        return (
            <div>
                {
                    memberList.map((item: any, index: number) => {
                        return this.renderReportItem(item, index);
                    })
                }
            </div>
        );
    }
}