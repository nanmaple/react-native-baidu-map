import * as React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';
import { MemberRoute, GameRecordRoute, ReportRoute, ScoreRecordRoute, MemberDetailRoute } from '../../Route/Config';
import Tabs from "../../Components/TabView/TabView";

import MemberList from "./Member";
import GameRecord from "./GameRecord";
import Report from "./Report/index";
import ScoreRecord from "./ScoreRecord"
import MemberDetail from "../MemberDetail"

const managerStyle = require("./style.css");
export default class Manager extends React.Component<any, any> {
    private tabList: Array<string> = ["会员", "游戏记录", "报表", "分数记录"];
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.tabClick = this.tabClick.bind(this);

    }

    public tabClick = (index: number): void => {
        this.setState({
            selectedIndex: index
        });
        switch (index) {
            case 0:
                this.props.history.replace(MemberRoute);
                break;
            case 1:
                this.props.history.replace(GameRecordRoute);
                break;
            case 2:
                this.props.history.replace(ReportRoute);
                break;
            case 3:
                this.props.history.replace(ScoreRecordRoute);
                break;
            default:
                this.props.history.replace(MemberRoute);
                break;
        }
    }

    render() {
        return (
            <div>
                <Tabs tabList={this.tabList} tabClick={this.tabClick} />
                <div className={managerStyle.content}>
                    <Route exact path={MemberRoute} component={MemberList} />
                    <Route exact path={GameRecordRoute} component={GameRecord} />
                    <Route exact path={ReportRoute} component={Report} />
                    <Route exact path={ScoreRecordRoute} component={ScoreRecord} />
                </div>
            </div>
        );
    }
}