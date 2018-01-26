import * as React from 'react';
import {
    Link,
    Prompt
} from 'react-router-dom';
import UserCtrl from "../../Controller/UserCtrl";
import { ResultEnum, MultiAccountDto, LoginResultDto } from '../../Base';

import { HomeRoute } from '../../Route/Config';

export default class Home extends React.Component<any, any> {
    private userCtrl: UserCtrl = new UserCtrl();
    constructor(props: any) {
        super(props);
        this.state = {
            accountList: []
        };
    }

    componentWillMount() {
        this.userCtrl.Login(this.LoginCallback);
    }

    private LoginCallback = (response: LoginResultDto): void => {
        if (response.Result == ResultEnum.LOGIN) {
            //登录成功，获取会员信息
            this.userCtrl.GetMemberInfo(this.Redirect);
        } else if (response.Result == ResultEnum.MULTI) {
            this.setState({ accountList: response.Data });
        } else if (response.Result == ResultEnum.ERROR) {
            this.Redirect();
        } else if (response.Result == ResultEnum.NO) {
            this.Redirect();
        }
    }


    /**
     * 重定向
     */
    private Redirect = (): void => {
        this.props.history.push(HomeRoute);
    }

    /**
     * 选中回调
     * @param index 编号
     */
    private onSelect = (memberID: number): void => {
        this.userCtrl.LoginByID(memberID, this.LoginCallback);
    }

    private renderLogin = (): any => {
        if (this.state.accountList && this.state.accountList.length > 0) {
            return (
                <ul>
                    {
                        this.state.accountList.map((item: MultiAccountDto) => {
                            return (
                                <li className="" key={item.MemberId} onClick={() => { this.onSelect(item.MemberId) }}>
                                    <div className="fx1">账号：{item.Account}</div>
                                    <div className="fx1 text-right">代理：{item.ParentNickname}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            return (
                <div>
                    登录中...
                </div>
            )
        }
    }

    render() {
        return (
            <div className="login">
                {this.renderLogin()}
            </div>
        );
    }
}