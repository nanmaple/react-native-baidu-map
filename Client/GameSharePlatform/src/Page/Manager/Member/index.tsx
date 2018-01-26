import * as React from 'react';
import {
    Link
} from "react-router-dom";
import MemberCtrl from '../../../Controller/MemberCtrl';
import GameRecordCtrl from '../../../Controller/GameRecordCtrl';
import ChildScoreDto from '../../../Dto/ChildScoreDto';
import Money from '../../../Utils/Money';
import { MemberDetailRoute, GetMemberDetailRoute } from '../../../Route/Config';
import MemberDetail from "../../MemberDetail/index";
const memberListStyle = require("./style.css");

export default class MemberList extends React.Component<any, any> {
    private memberCtrl: MemberCtrl = new MemberCtrl();
    private memberCtrls: GameRecordCtrl = new GameRecordCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            memberList: []
        }
    }
    componentDidMount() {
        this.memberCtrl.GetChildScoreList(true, this.Handler);
    }

    public Handler = (data: Array<ChildScoreDto>, isRefresh: boolean, error?: string): void => {
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

    /**
     * 单行点击回调
     */
    public MemberListClick = (memberId: number): void => {
    }


    /**
     * 渲染每行数据
     */
    public renderMemberItem = (rowItem: ChildScoreDto, index: number): any => {
        return (
            <Link to={`${GetMemberDetailRoute(rowItem.MemberId)}`} key={index} className={memberListStyle.rowItem}>
                <div className={memberListStyle.nickName}>{rowItem.Nickname}{rowItem.Remark ? "(" + rowItem.Remark + ")" : ""}</div>
                <div className={memberListStyle.score}>分数:{Money.Format(rowItem.Score)}</div>
            </Link>
        )
    }

    render() {
        let { memberList } = this.state;
        if (!memberList || memberList.length == 0) {
            return (
                <div>
                    无数据
                </div>

            )
        }
        return (
            <div>
                {
                    memberList.map((item: any, index: number) => {
                        return this.renderMemberItem(item, index);
                    })
                }
            </div>
        );
    }
}