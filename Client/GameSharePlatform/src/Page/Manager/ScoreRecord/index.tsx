import * as React from 'react';
import ScoreRecordCtrl from '../../../Controller/ScoreRecordCtrl';

import PullLoad, { STATS } from "../../../Components/PullList/index";
const pullStyle = require("../../../Components/PullList/ReactPullLoad.css");

import { Button, Toast } from "react-weui";
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Money from '../../../Utils/Money';

import CompToast, { ToastType } from '../../../Components/Toast';
import LanguageManager from '../../../Language/LanguageManager';
import { ErrorCode } from '../../../Enum/ErrorCode';
import { TransactionType } from "../../../Enum/TransactionType";
const styles = require("./style.css");

export default class MemberList extends React.Component<any, any> {
    private ScoreRecordCtrl: ScoreRecordCtrl = new ScoreRecordCtrl();
    private toast: any;
    private languageManager: LanguageManager = new LanguageManager();
    constructor(props: any) {
        super(props);
        this.state = {
            memberList: [],
            action: STATS.init,
            isNoMore: false,
            init: true,
            showLoading: false,
        }
    }
    componentDidMount() {
        this.setState({
            showLoading: true
        })
        this.ScoreRecordCtrl.GetScoreRecord(true, this.Handler);
    }
    /**
    * 提示信息
    * @param errorKey 提示信息
    * @param  type 信息类型
    */
    private ShowToast = (errorKey: string, type: ToastType = ToastType.Success): void => {
        if (!this.languageManager) {
            this.languageManager = new LanguageManager();
        }
        let msg: string = this.languageManager.GetErrorMsg(errorKey);
        this.toast.Show(msg, type);
    }
    /**
     * 数据请求回调
     * @param data 请求的数据
     * @param isRefresh 是否是刷新
     * @param error 错误信息
     */
    public Handler = (data: any, isRefresh: Array<any>, error?: string): void => {
        this.setState({
            showLoading: false
        })
        if (error) {
            this.setState({
                action: STATS.reset,
            })
            //提示错误信息
            this.ShowToast(error, ToastType.Error);
            return;
        }
        //初始化 设置action为reset
        if (this.state.init) {
            this.setState({
                memberList: data,
                action: STATS.reset,
                isNoMore: isRefresh[1],
                init: false
            });
        } else {
            //刷新
            if (isRefresh[0]) {
                this.setState({
                    memberList: data,
                    action: STATS.refreshed,
                    isNoMore: isRefresh[1]
                });
            } else {//加载更多
                this.setState({
                    memberList: this.state.memberList.concat(data),
                    action: STATS.reset,
                    isNoMore: isRefresh[1]
                });
            }

        }

    }
    /**
     * 上拉下拉回调 动作处理
     * @param action 当前动作
     */
    private handleAction = (action: any): any => {
        //判断当前动作状态
        if (action === this.state.action ||
            action === STATS.refreshing && this.state.action === STATS.loading ||
            action === STATS.loading && this.state.action === STATS.refreshing) {
            return false
        }

        if (action === STATS.refreshing) {//刷新
            this.ScoreRecordCtrl.GetScoreRecord(true, this.Handler);
        } else if (action === STATS.loading && !this.state.isNoMore) {//加载更多

            this.ScoreRecordCtrl.GetScoreRecord(false, this.Handler);
        } else if (action === STATS.loading && this.state.isNoMore) {//没有更多数据
            this.setState({
                action: STATS.reset
            })
            return;
        }
        //设置为当前动作
        this.setState({
            action: action
        })
        console.log(action, this.state.action);

    }
    /**
     * 渲染单行分数记录
     */
    public renderRowItem = (item: any, index: any): any => {
        return (
            <div key={index} className={styles.row}>
                <div className={styles.time}>{item.UpdateTime}</div>
                {
                    <div className={(item.Changed == 0 ? "ling" : item.Changed > 0 ? "zheng" : "fu")+" "+styles.win}>
                        {Money.Format(item.Changed)}
                    </div>
                }
                <div className={styles.change}>{Money.Format(item.Balance)}</div>
                <div className={styles.message}>{ this.languageManager.GetErrorMsg(item.TransactionType)}</div>
            </div >
        )
    }


    public renderData = () => {
        let { memberList, isNoMore, action } = this.state;
        if (!memberList || memberList.length == 0) {
            return (
                <div className="noData">
                    {this.languageManager.GetErrorMsg("NoData")}
                </div>

            )
        } else {
            return (
                <div className={styles.listContent}>
                    <PullLoad
                        isBlockContainer={true}
                        downEnough={40}
                        action={action}
                        handleAction={this.handleAction}
                        noMore={isNoMore}
                        distanceBottom={1000}>
                        {
                            memberList.map((item: any, index: any) => {
                                return this.renderRowItem(item, index);
                            })
                        }

                    </PullLoad>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <CompToast ref={(c) => this.toast = c} />
                <Toast icon="loading" show={this.state.showLoading}>{this.languageManager.GetErrorMsg("Loading")}</Toast>
                <div className={styles.listTitle}>
                    <div className={styles.title}>
                        <div className={styles.time}>{this.languageManager.GetErrorMsg("Time")}</div>
                        <div className={styles.change}>{this.languageManager.GetErrorMsg("ScoreChanges")}</div>
                        <div className={styles.change}>{this.languageManager.GetErrorMsg("Balance")}</div>
                        <div className={styles.message}>{this.languageManager.GetErrorMsg("Detail")}</div>
                    </div>
                    {this.renderData()}
                </div>

            </div>
        );
    }
}