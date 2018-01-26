"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const MemberCtrl_1 = require("../../../Controller/MemberCtrl");
const baseInforStyle = require("./style.css");
class BaseInformation extends React.Component {
    constructor(props) {
        super(props);
        this.MemberCtrl = new MemberCtrl_1.default();
        this.Handler = (data, isRefresh, error) => {
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
        };
        /**
         * 进取分输入监听
         * @param event 事件对象
         */
        this.scoreChange = (event) => {
            let value = event.target.value;
            if (isNaN(value)) {
                alert("只能输入数字");
                return;
            }
            this.setState({
                scoreValue: event.target.value
            });
        };
        /**
         * 备注输入框监听
         * @param event 事件对象
         */
        this.remarkChange = (event) => {
            this.setState({
                newRemark: event.target.value
            });
        };
        /**
         * 密码输入框监听
         * @param event 事件对象
         */
        this.PassWordChange = (event) => {
            this.setState({
                PassWord: event.target.value
            });
        };
        /**
         * 进分取分
         * @param type 类型 in-进分 out-取分
         */
        this.SetScore = (type) => {
            let MemberId = this.state.memberId, Amount = Number(this.state.scoreValue);
            if (type === "in") {
                this.MemberCtrl.TransferIn(MemberId, Amount, this.SetScoreHandle);
            }
            else {
                this.MemberCtrl.TransferOut(MemberId, Amount, this.SetScoreHandle);
            }
        };
        this.SetScoreHandle = (state, data, error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(data);
            }
        };
        /**
         * 修改备注
         */
        this.SetRemark = () => {
            let MemberId = this.state.memberId, Remark = this.state.newRemark;
            if (this.state.oldRemark == Remark) {
                console.log("昵称未变化");
                return;
            }
            else {
                this.MemberCtrl.SetRemark(MemberId, Remark, this.SetRemarkHandle);
            }
        };
        this.SetRemarkHandle = (state, data, error) => {
            if (error) {
                console.log(error);
            }
            else {
                this.setState({
                    oldRemark: data[1]
                });
            }
        };
        /**
         * 修改会员状态
         */
        this.SetMemberClosed = () => {
            let MemberId = this.state.memberId, Close = !this.state.memberClose;
            this.MemberCtrl.UpdateCloseStatus(MemberId, Close, this.SetMemberClosedHandle);
        };
        this.SetMemberClosedHandle = (state, data, error) => {
            if (error) {
                console.log(error);
            }
            else {
                this.setState({
                    memberClose: data[1]
                });
            }
        };
        /**
         * 设置密码
         */
        this.SetPassWord = () => {
            let MemberId = this.state.memberId, Password = this.state.PassWord;
            this.MemberCtrl.SetChildPassword(MemberId, Password, this.SetPassWordHandle);
        };
        this.SetPassWordHandle = (state, data, error) => {
            if (error) {
                console.log(error);
            }
            else {
                this.setState({
                    PassWord: data[1]
                });
            }
        };
        /**
         * 显示会员和自己的分数
         * @param MemberSocre 会员分数
         * @param MyScore 自己分数
         */
        this.renderScore = (MemberSocre = 0, MyScore = 0) => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("div", { className: baseInforStyle.memSoc },
                    "\u4F1A\u5458\u5206\u6570\uFF1A",
                    Math.round(MemberSocre)),
                React.createElement("div", { className: baseInforStyle.mySoc },
                    "\u6211\u7684\u5206\u6570\uFF1A",
                    Math.round(MyScore)));
        };
        /**
          * 渲染进分取分
        */
        this.renderChangeScore = () => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("label", { className: baseInforStyle.inputScore },
                    "\u8F93\u5165\u5206\u6570:",
                    React.createElement("input", { type: "text", value: this.state.scoreValue, placeholder: "0", onChange: this.scoreChange })),
                React.createElement("div", { className: baseInforStyle.addScore, onClick: () => this.SetScore("in") }, "\u8FDB\u5206"),
                React.createElement("div", { className: baseInforStyle.reduceScore, onClick: () => this.SetScore("out") }, "\u53D6\u5206"));
        };
        /**
         * 渲染备注
        */
        this.renderSetRemark = (MemberRemark) => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("label", { className: baseInforStyle.inputScore },
                    "\u5907\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u6CE8:",
                    React.createElement("input", { type: "text", placeholder: this.state.oldRemark, value: this.state.newRemark, onChange: this.remarkChange })),
                React.createElement("div", { onClick: () => { this.SetRemark(); }, className: baseInforStyle.mySoc }, "\u4FEE\u6539"));
        };
        /**
         * 渲染状态
        */
        this.renderSetState = (MemberClosed) => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("div", { className: baseInforStyle.memSoc },
                    "\u72B6\u6001\uFF1A",
                    MemberClosed ? "关闭" : "正常"),
                React.createElement("div", { onClick: () => this.SetMemberClosed(), className: baseInforStyle.mySoc }, "\u4FEE\u6539"));
        };
        /**
         * 显示账号
        */
        this.renderAccount = (Account = "暂无") => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("div", { className: baseInforStyle.memSoc },
                    "\u8D26\u53F7:",
                    Account));
        };
        /**
           * 显示密码
        */
        this.renderSetPassWord = () => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("label", { className: baseInforStyle.inputScore },
                    "\u5BC6\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u7801:",
                    React.createElement("input", { type: "password", value: this.state.PassWord, onChange: this.PassWordChange })),
                React.createElement("div", { onClick: () => { this.SetPassWord(); }, className: baseInforStyle.mySoc }, "\u4FEE\u6539"));
        };
        /**
         * 显示电话
        */
        this.renderPhone = (PhoneNumber = "暂无") => {
            return React.createElement("div", { className: baseInforStyle.rowItem },
                React.createElement("div", { className: baseInforStyle.memSoc },
                    "\u624B\u673A\u53F7:",
                    PhoneNumber));
        };
        this.state = {
            memberId: "",
            memberInfor: {},
            oldRemark: "",
            memberClose: true,
            scoreValue: 0,
            newRemark: "",
            memberRemark: "",
            PassWord: "······"
        };
    }
    componentDidMount() {
        let memberId = this.props.match.params.memberId;
        this.setState({
            memberId
        });
        this.MemberCtrl.GetMemberInfo(memberId, this.Handler);
    }
    render() {
        console.log(this.state.memberInfor);
        let { memberClose, memberRemark } = this.state;
        let { MemberSocre, MemberNickname, Account, MyScore, PhoneNumber, HeadImageUrl } = this.state.memberInfor;
        return (React.createElement("div", { className: baseInforStyle.container },
            this.renderScore(MemberSocre, MyScore),
            this.renderChangeScore(),
            this.renderSetRemark(memberRemark),
            this.renderSetState(memberClose),
            this.renderSetPassWord(),
            this.renderAccount(),
            this.renderPhone(PhoneNumber)));
    }
}
exports.default = react_router_dom_1.withRouter(BaseInformation);
//# sourceMappingURL=index.js.map