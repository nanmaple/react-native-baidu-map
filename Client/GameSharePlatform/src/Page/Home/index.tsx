import * as React from 'react';
import {
    Link,
    Prompt,
} from 'react-router-dom';

import CacheManager, { CacheType } from '../../Service/CacheManager/CacheManager';

import { GetRedirectUrl } from "../../GameConfig";
import CompToast, { ToastType } from '../../Components/Toast';
import LanguageManager from '../../Language/LanguageManager';
import { GetQuery } from '../../Utils/Url';
import * as GameConfig from '../../GameConfig';


import { MemberRoute } from '../../Route/Config';
import UserCtrl from "../../Controller/UserCtrl";

import { GameList } from "../../GameList";
const logoImg = require("../../Image/logo.png");
const style = require("./style.css");
const rightImg = require("../../Image/right.png");
const starImg = require("../../Image/star.png");

export default class Home extends React.Component<any, any> {
    private userCtrl: UserCtrl = new UserCtrl();
    private toast: any;
    private languageManager: LanguageManager = new LanguageManager();
    constructor(props: any) {
        super(props);
        let memberInfo:any = this.userCtrl.loginService.GetMemberInfoByLocal(),
            authorization:any = this.userCtrl.loginService.GetAuthorizationDtoByLocal();
        this.state = {
            isLogin: this.userCtrl.loginService.IsLogin(),
            isClose: this.userCtrl.loginService.IsClose(),
            memberInfo: memberInfo,
            score: memberInfo && memberInfo.Score,
            isTourists: authorization && authorization.IsTourists,
            gmeList: [],
            value: CacheManager.GetCache(CacheType.Language).language,
            account: memberInfo && memberInfo.Account.toUpperCase(),
            nickName: memberInfo && memberInfo.Nickname
        }
    }
    componentDidMount() {
        this.userCtrl.loginService.GetMemberScore(this.Handler);

    }
    /**
     * 获取会员信息handler回调
     */
    public Handler = (data: any): void => {
        if (data) {
            this.setState({
                score: data.Score,
                memberInfo: data,
                account:  data.Account.toUpperCase(),
                nickName:  data.Nickname
            })
        }



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
    private GameLogin = (id: any, local:boolean) => {
        let isLogin = this.userCtrl.GameLogin(id);
        if (isLogin) {
			let token = this.userCtrl.loginService.GetAuthorization();
			if(token == null) {
				return;
			}
            window.location.href = GetRedirectUrl(id, local, token.Token, 'ch')
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
            parentID = "";
        }
        let link = GameConfig.GetWeChatShareDto(parentID, true).Link;
        console.log(link);
        window.location.replace(link);

    }
    /**
     * 渲染按钮
     */
    public renderButton = (): any => {
        let { isTourists, isLogin, isClose } = this.state;
        if (isTourists) {
            return (<div onClick={this.Attention} className={style.button}>{this.languageManager.GetErrorMsg("Attention")}</div>)
        } else if (!isLogin) {
            return (<div onClick={this.Attention} className={style.button}>{this.languageManager.GetErrorMsg("Login")}</div>)
        } else if (isClose) {
            return null;
        } else if (isLogin) {
            return (<Link to={MemberRoute} className={style.button}>{this.languageManager.GetErrorMsg("Manager")}</Link>)
        }
    }
    /**
     * 渲染游戏列表
     */
    private renderGameList = (item: any, index: number) => {
        return (
            <div key={index}>
                {
                    item.complete ? (
                        <div key={index} className={style.rowItem} onClick={() => { this.GameLogin(item.id, item.local) }}>
                            <div className={style.img}>
                                <img style={{ width: 60, height: 60 }} src={item.imgUrl} />
                            </div>
                            <div className={style.gameMsg}>
                                <div className={style.name}>{this.languageManager.GetErrorMsg(item.name)}</div>
                                <div className={style.start}>{this.renderStar(item.star)}</div>
                            </div>
                            <div className={style.imgRight}>
                                {
                                    item.complete ? (<img style={{ width: 16, height: 16 }} src={rightImg} />) : <span style={{ color: "red" }}>{this.languageManager.GetErrorMsg("Waiting")}</span>
                                }

                            </div>
                        </div>
                    ) : (
                            <div key={index} className={style.rowItem}>
                                <div className={style.img}>
                                    <img style={{ width: 60, height: 60 }} src={item.imgUrl} />
                                </div>
                                <div className={style.gameMsg}>
                                    <div className={style.name}>{this.languageManager.GetErrorMsg(item.name)}</div>
                                    <div className={style.start}>{this.renderStar(item.star)}</div>
                                </div>
                                <div className={style.imgRight}>
                                    {
                                        item.complete ? (<img style={{ width: 16, height: 16 }} src={rightImg} />) : <span style={{ color: "red" }}>{this.languageManager.GetErrorMsg("Waiting")}</span>
                                    }

                                </div>
                            </div>
                        )
                }
            </div>


        )
    }
    private RefreshScore = () => {
        this.userCtrl.loginService.GetMemberScore(this.Handler);
    }
    /**
     * 切换语言
     */
    private handleChange = (event: any) => {
        this.languageManager.SetLanguage(Number(event.target.value));
        this.setState({
            value: event.target.value
        });
    }
    /**
     * 渲染星星
     * @param level 几星
     */
    renderStar = (level: number) => {
        let arr = [];
        for (let i = 0; i < level; i++) {
            arr.push(level)
        }
        return arr.map((item, index) => {
            return (<img key={index} style={{ width: 16, height: 16 }} src={starImg} />)
        })
    }
    render() {
        let socre: string = this.state.score ? this.state.score : "0",
            headImg = this.state.memberInfo && this.state.memberInfo.HeadImageUrl ? this.state.memberInfo.HeadImageUrl : logoImg;
        let { account, nickName } = this.state;
        let Test = this.state.memberInfo?this.state.memberInfo.Test:"";
        return (
            <div className="home">
                <CompToast ref={(c) => this.toast = c} />
                <div className={style.header}>
                    <div className={style.info} >
                        <img src={headImg} alt="" className={style.logo} />
                        <div>
                            <div>
                                {
                                    account && (!Test ? (<label>{nickName} </label>) : (<label>{this.languageManager.GetErrorMsg("Test")}</label>))
                                }
                            </div>
                            <div>
                                {
                                    <label>{this.languageManager.GetErrorMsg("Account")}:{account} </label>
                                }

                                {
                                    this.state.isLogin ? (
                                        <label onClick={() => { this.RefreshScore() }} htmlFor="">{this.languageManager.GetErrorMsg("Score")}:{socre}</label>
                                    ) : null
                                }
                            </div>
                        </div>

                    </div>
                    <div className={style.manager}>
                        {
                            this.renderButton()
                        }
                    </div>
                    {/* <div>
                        <select className={style.select} value={this.state.value} onChange={this.handleChange}>
                            <option value="0">中文</option>
                            <option value="1">English</option>
                        </select>
                    </div> */}
                </div>
                <div className={style.gameList}>
                    {
                        GameList.map((item: any, index: number) => {
                            return this.renderGameList(item, index);
                        })
                    }
                </div>
            </div>
        );
    }
}