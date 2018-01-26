import * as React from 'react';
import { withRouter } from "react-router-dom";

import MemberCtrl from "../../../Controller/MemberCtrl";
import MemberInfoDto from "../../../Dto/MemberInfoDto";
const baseInforStyle = require("./style.css");

class BaseInformation extends React.Component<any, any> {
    private MemberCtrl: MemberCtrl = new MemberCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            memberId: "",
            memberInfor: {},

            oldRemark: "",
            memberClose: true,
            scoreValue: 0,
            newRemark: "",
            memberRemark: "",
            PassWord: "······"

        }
    }
    componentDidMount() {
        let memberId = this.props.match.params.memberId;
        this.setState({
            memberId
        })
        this.MemberCtrl.GetMemberInfo(memberId, this.Handler);
    }

    public Handler = (data: MemberInfoDto, isRefresh: boolean, error?: string): void => {
        if (error) {
            //todo 提示错误信息
            return;
        }
        this.setState({
            memberInfor: data,
            oldRemark: data.Remark,
            memberClose: data.Closed,
            newRemark: data.Remark,

        });

    }
    /**
     * 进取分输入监听
     * @param event 事件对象
     */
    private scoreChange = (event: any): void => {
        let value = event.target.value;
        if (isNaN(value)) {
            alert("只能输入数字");
            return;
        }
        this.setState({
            scoreValue: event.target.value
        });
    }
    /**
     * 备注输入框监听
     * @param event 事件对象
     */
    private remarkChange = (event: any): void => {
        this.setState({
            newRemark: event.target.value
        });
    }
    /**
     * 密码输入框监听
     * @param event 事件对象
     */
    private PassWordChange = (event: any): void => {
        this.setState({
            PassWord: event.target.value
        });
    }
    /**
     * 进分取分
     * @param type 类型 in-进分 out-取分
     */
    private SetScore = (type: any): void => {
        let MemberId = this.state.memberId,
            Amount = Number(this.state.scoreValue);
        if (type === "in") {
            this.MemberCtrl.TransferIn(MemberId, Amount, this.SetScoreHandle);
        } else {
            this.MemberCtrl.TransferOut(MemberId, Amount, this.SetScoreHandle);
        }
    }
    private SetScoreHandle = (state: any, data: any[], error?: any) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
    /**
     * 修改备注
     */
    private SetRemark = () => {
        let MemberId = this.state.memberId,
            Remark = this.state.newRemark;
        if (this.state.oldRemark == Remark) {
            console.log("昵称未变化");
            return;
        } else {
            this.MemberCtrl.SetRemark(MemberId, Remark, this.SetRemarkHandle);
        }

    }
    private SetRemarkHandle = (state: any, data: any[], error?: any) => {
        if (error) {
            console.log(error);
        } else {
            this.setState({
                oldRemark: data[1]
            })
        }
    }
    /**
     * 修改会员状态
     */
    private SetMemberClosed = () => {
        let MemberId = this.state.memberId,
            Close = !this.state.memberClose;
        this.MemberCtrl.UpdateCloseStatus(MemberId, Close, this.SetMemberClosedHandle);

    }

    private SetMemberClosedHandle = (state: any, data: any[], error?: any) => {
        if (error) {
            console.log(error);
        } else {
            this.setState({
                memberClose: data[1]
            })
        }
    }
    /**
     * 设置密码
     */
    private SetPassWord = () => {
        let MemberId = this.state.memberId,
            Password = this.state.PassWord;
        this.MemberCtrl.SetChildPassword(MemberId, Password, this.SetPassWordHandle);
    }

    private SetPassWordHandle = (state: any, data: any[], error?: any) => {
        if (error) {
            console.log(error);
        } else {
            this.setState({
                PassWord: data[1]
            })
        }

    }
    /**
     * 显示会员和自己的分数
     * @param MemberSocre 会员分数
     * @param MyScore 自己分数
     */
    private renderScore = (MemberSocre: any = 0, MyScore: any = 0) => {
        return <div className={baseInforStyle.rowItem}>
            <div className={baseInforStyle.memSoc}>会员分数：{Math.round(MemberSocre)}</div>
            <div className={baseInforStyle.mySoc}>我的分数：{Math.round(MyScore)}</div>
        </div>
    }
    /**
      * 渲染进分取分
    */
    private renderChangeScore = () => {
        return <div className={baseInforStyle.rowItem}>
            <label className={baseInforStyle.inputScore}>
                输入分数:<input type="text" value={this.state.scoreValue} placeholder={"0"} onChange={this.scoreChange} />
            </label>
            <div className={baseInforStyle.addScore} onClick={() => this.SetScore("in")}>进分</div>
            <div className={baseInforStyle.reduceScore} onClick={() => this.SetScore("out")}>取分</div>
        </div>
    }

    /**
     * 渲染备注
    */
    private renderSetRemark = (MemberRemark: any) => {
        return <div className={baseInforStyle.rowItem}>
            <label className={baseInforStyle.inputScore}>
                备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:<input type="text" placeholder={this.state.oldRemark} value={this.state.newRemark} onChange={this.remarkChange} />
            </label>
            <div onClick={() => { this.SetRemark() }} className={baseInforStyle.mySoc}>修改</div>
        </div>
    }

    /**
     * 渲染状态
    */
    private renderSetState = (MemberClosed: any) => {
        return <div className={baseInforStyle.rowItem}>
            <div className={baseInforStyle.memSoc}>状态：{MemberClosed ? "关闭" : "正常"}</div>
            <div onClick={() => this.SetMemberClosed()} className={baseInforStyle.mySoc}>修改</div>
        </div>
    }

    /**
     * 显示账号
    */
    private renderAccount = (Account: any = "暂无") => {
        return <div className={baseInforStyle.rowItem}>
            <div className={baseInforStyle.memSoc}>账号:{Account}</div>
        </div>
    }

    /**
       * 显示密码
    */
    private renderSetPassWord = () => {
        return <div className={baseInforStyle.rowItem}>
            <label className={baseInforStyle.inputScore}>
                密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:<input type="password" value={this.state.PassWord} onChange={this.PassWordChange} />
            </label>
            <div onClick={() => { this.SetPassWord() }} className={baseInforStyle.mySoc}>修改</div>
        </div>
    }

    /**
     * 显示电话
    */
    private renderPhone = (PhoneNumber: any = "暂无") => {
        return <div className={baseInforStyle.rowItem}>
            <div className={baseInforStyle.memSoc}>手机号:{PhoneNumber}</div>
        </div>
    }
    render() {
        console.log(this.state.memberInfor);
        let { memberClose, memberRemark } = this.state;
        let { MemberSocre, MemberNickname, Account, MyScore, PhoneNumber, HeadImageUrl } = this.state.memberInfor;
        return (
            <div className={baseInforStyle.container}>
                {
                    this.renderScore(MemberSocre, MyScore)
                }
                {
                    this.renderChangeScore()
                }
                {
                    this.renderSetRemark(memberRemark)
                }
                {
                    this.renderSetState(memberClose)
                }
                {
                    this.renderSetPassWord()
                }
                {
                    this.renderAccount()
                }
                {
                    this.renderPhone(PhoneNumber)
                }



            </div>
        );
    }
}

export default withRouter(BaseInformation);