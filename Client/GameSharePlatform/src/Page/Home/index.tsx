import * as React from 'react';
import {
    Link,
    Prompt
} from 'react-router-dom';
import UserCtrl from "../../Controller/UserCtrl";
import { ResultEnum, MemberInfoDto } from '../../Base';

import { ManagerRoute,MemberRoute } from '../../Route/Config';

import Money from '../../Utils/Money';

const logoImg = require("../../Style/Image/logo.png");
const style = require("./style.css");

export default class Home extends React.Component<any, any> {
    private userCtrl: UserCtrl = new UserCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            isLogin: this.userCtrl.IsLogin(),
            isClose: this.userCtrl.IsClose(),
            memberInfo: this.userCtrl.GetMemberInfoByLocal()
        }
    }
    tabClick=(index:number)=>{
           console.log(index);
    }
    renderBtn = (): any => {
        if (!this.state.isLogin) {
            return (<Link to={MemberRoute} className={style.button}>关注</Link>)
        } else if (this.state.isClose) {
            return null;
        } else {
            return (<Link to={MemberRoute} className={style.button}>管理</Link>)
        }
    }

    render() {
        return (
            <div className="home">
                <div className={style.header}>
                    <div className={style.info} >
                        <img src={logoImg} alt="" className={style.logo} />
                        {
                            this.state.isLogin ? (
                                <label htmlFor="">{"分数：" + Money.Format(this.state.memberInfo.Score)}</label>
                            ) : null
                        }
                    </div>
                    <div className={style.manager}>
                        {
                            this.renderBtn()
                        }
                    </div>
          
                </div>
                <Link to={MemberRoute} className={style.button}>会员管理</Link>
            </div>
        );
    }
}