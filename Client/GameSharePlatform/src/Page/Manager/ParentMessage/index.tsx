import * as React from 'react';
import {
    Link,
    Prompt,
    Route
} from 'react-router-dom';
import { InfoItemInput, InfoItemPassword, InfoItemAmount } from '../../../Components/InfoItem';
import CompToast, { ToastType } from '../../../Components/Toast';
import LanguageManager from '../../../Language/LanguageManager';
import { ErrorCode } from '../../../Enum/ErrorCode';

import MemberCtrl from '../../../Controller/MemberCtrl';
const style = require("./styles.css");
const rightImg = require("../../../Image/right.png");
class ParentMsg extends React.Component<any, any> {
    private toast: any;
    private memberCtrl: MemberCtrl = new MemberCtrl();
    private languageManager: LanguageManager = new LanguageManager();
    // private list: Array<string> = [
    //     this.languageManager.GetErrorMsg("ScoreRecord"),
    //     this.languageManager.GetErrorMsg("GameRecord"),
    //     this.languageManager.GetErrorMsg("Report"),
    //     this.languageManager.GetErrorMsg("FullReport"),
    //     this.languageManager.GetErrorMsg("Setting")];
    constructor(props: any) {
        super(props);
        this.state = {
            headImg: "",
            nickName: "",
            remark: "",
        }
    }
    componentDidMount() {
        this.ShowToast(this.languageManager.GetErrorMsg("Loading"), ToastType.Loading);
        this.memberCtrl.GetParentInfo(this.GetParentInfoHandle);
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
 * 修改备注
 * @param remark 备注信息
 */
    private SetRemark = (remark: string) => {
        this.ShowToast(ErrorCode[ErrorCode.Wait], ToastType.Wait);
        if (!remark) {
            this.ShowToast(ErrorCode[ErrorCode.RemarkNoNull], ToastType.Error);
            return;
        } else if (this.state.remark == remark) {
            this.ShowToast(ErrorCode[ErrorCode.RemarkNoChange], ToastType.Error);
            return;
        } else {
            this.memberCtrl.SetParentRemark(remark, this.SetRemarkHandle);
        }

    }
    /**
     * 设置备注回调
     */
    private SetRemarkHandle = (data: any, error?: any) => {
        this.toast.Hide();
        if (error) {
            this.ShowToast(error, ToastType.Error);
        } else {
            this.ShowToast(ErrorCode[ErrorCode.Success], ToastType.Success);
            this.setState({
                remark: data[1]
            })
        }
    }
    private GetParentInfoHandle = (data: any, error?: any) => {
        this.toast.Hide();
        if (error) {
            this.ShowToast(error, ToastType.Error);
        } else if (data != null) {
            this.setState({
                headImg: data.HeadImageUrl,
                nickName: data.Nickname,
                remark: data.Remark
            })
        }

        console.log(data);

    }
    render() {
        let { remark, nickName, headImg } = this.state;
        return (
            <div className={style.home}>
                <CompToast ref={(c) => this.toast = c} />
                <InfoItemInput label={this.languageManager.GetErrorMsg("NickName")} value={nickName} disable={true}></InfoItemInput>
                <InfoItemInput label={this.languageManager.GetErrorMsg("Remark")} value={remark} handler={this.SetRemark}></InfoItemInput>
                <div className={style.head}>
                    <div className={style.label}>{this.languageManager.GetErrorMsg("HeadImg")}:</div>
                    <div className={style.img}><img  className = {style.img} src={headImg} /></div>
                </div>
            </div>
        );
    }
}

export default ParentMsg