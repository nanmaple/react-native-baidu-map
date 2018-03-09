import * as React from 'react';
import {
    Link,
    Prompt
} from 'react-router-dom';

import { AuthorizationDto } from '../../Dto/AuthorizationDto';
import CacheManager, { CacheType, UserInfo, Authorization } from '../../Service/CacheManager/CacheManager';

import { GetRedirectUrl } from "../../GameConfig";
import CompToast, { ToastType } from '../../Components/Toast';
import LanguageManager from '../../Language/LanguageManager';
import { ErrorCode } from '../../Enum/ErrorCode';
import { GetQuery } from '../../Utils/Url';
import * as GameConfig from '../../GameConfig';


import { MemberRoute } from '../../Route/Config';
import UserCtrl from "../../Controller/UserCtrl";
import Money from '../../Utils/Money';
const logoImg = require("../../Image/logo.png");
const style = require("./style.css");
const rightImg = require("../../Image/right.png");

export default class Home extends React.Component<any, any> {
    private userCtrl: UserCtrl = new UserCtrl();
    private toast: any;
    private languageManager: LanguageManager = new LanguageManager();
    constructor(props: any) {
        super(props);
        this.state = {
            isLogin: this.userCtrl.IsLogin(),
            isClose: this.userCtrl.IsClose(),
            memberInfo: this.userCtrl.GetMemberInfoByLocal(),
            isTourists: this.userCtrl.GetAuthorizationDtoByLocal().IsTourists,
            gmeList: []
        }
    }
    componentDidMount() {
        //请求会员信息
    }
    /**
     * 提示信息
     * @param errorKey 提示信息
     * @param  type 信息类型
    */
    private ShowToast = (errorKey: string, type: ToastType = ToastType.Success): void => {
        let msg: string = this.languageManager.GetErrorMsg(errorKey);
        this.toast.Show(msg, type);
    }
    /**
     * 游戏跳转
     * @param id  游戏ID
     * @param url 游戏地址
     */
    private GameLogin = (id: number) => {
        let isLogin = this.userCtrl.GameLogin(id);
        if (isLogin) {
            window.location.href = GetRedirectUrl(id)
        }
        else {
            //todo
            this.ShowToast("token_Error", ToastType.Error);

        }
    }
    /**
     *点击关注 
     */
    private Attention = () => {
        //获取地址栏中state参数，即父级（推荐人）ID
        let parentID: string = GetQuery("parentid");
        if (!parentID) {
            parentID = "1";
        }
        let link = GameConfig.GetWeChatShareDto(parentID, true).Link;
        window.location.replace(link);

    }
    /**
     * 渲染按钮
     */
    public renderButton = (): any => {
        let { isTourists } = this.state;
        if (isTourists) {
            return (<div onClick={this.Attention} className={style.button}>{this.languageManager.GetErrorMsg("Attention")}</div>)
        } else if (!this.state.isLogin) {
            return (<div onClick={this.Attention} className={style.button}>{this.languageManager.GetErrorMsg("Login")}</div>)
        } else if (this.state.isClose) {
            return null;
        } else if (this.state.isLogin) {
            return (<Link to={MemberRoute} className={style.button}>{this.languageManager.GetErrorMsg("Manager")}</Link>)
        }
    }
    private renderGameList = (item: any, index: number) => {
        return (
            <div key={index} className={style.rowItem} onClick={() => { this.GameLogin(item.id) }}>
                <div className={style.img}>
                    <img style={{ width: 36, height: 36 }} src={item.imgUrl} />
                </div>
                <div className={style.gameMsg}>
                    <div className={style.name}>{this.languageManager.GetErrorMsg("GameName")}:{item.name}</div>
                    <div className={style.start}>{this.languageManager.GetErrorMsg("Recommended")}:{item.star}</div>
                </div>
                <div className={style.imgRight}>
                    <img style={{ width: 16, height: 16 }} src={rightImg} />
                </div>
            </div>
        )
    }
    render() {
        let { gameList } = this.state;
        gameList = [{ imgUrl: logoImg, name: this.languageManager.GetErrorMsg("ShotDoor"), star: "五颗星", id: 1 }];
        let socre: string = this.state.memberInfo ? Money.Format(this.state.memberInfo.Score) : "0";
        return (
            <div className="home">
                <CompToast ref={(c) => this.toast = c} />
                <div className={style.header}>
                    <div className={style.info} >
                        <img src={logoImg} alt="" className={style.logo} />
                        {
                            this.state.isLogin ? (
                                <label htmlFor="">{this.languageManager.GetErrorMsg("Score")}:{socre}</label>
                            ) : null
                        }
                    </div>
                    <div className={style.manager}>
                        {
                            this.renderButton()
                        }
                    </div>
                </div>
                <div className={style.gameList}>
                    {
                        gameList.map((item: any, index: number) => {
                            return this.renderGameList(item, index);
                        })
                    }
                </div>
            </div>
        );
    }
}