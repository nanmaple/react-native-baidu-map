import * as React from "react";

import { Toast } from 'antd-mobile';

export enum ToastType {
    Success,
    Loading,
    Wait,
    Error,
    Alert
}
import './style.css';

export default class CompToast extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isShow: false,
            msg: "",
            type: "loading"
        }
    }

    public Show = (msg: string, type: ToastType): void => {
        let typeIcon: string = "";
        let time: number = 500;
        switch (type) {
            case ToastType.Success:
                typeIcon = "success";
                time = 1;
                Toast.success(msg, time, () => { }, false);
                break;
            case ToastType.Alert:
                typeIcon = "warn";
                time = 1;
                Toast.fail(msg, time, () => { }, false);
                break;
            case ToastType.Error:
                typeIcon = "warn";
                time = 1;
                Toast.fail(msg, time, () => { }, false);
                break;
            case ToastType.Loading:
                typeIcon = "loading";
                Toast.loading(msg, time, () => { }, false);
                break;
            case ToastType.Wait:
                typeIcon = "waiting";
                Toast.loading(msg, time, () => { }, false);
                break;
            default:
                typeIcon = "warn";
                Toast.fail(msg, time, () => { }, false);
                break;
        }
    }

    public Hide = (msg?: string, type?: ToastType): void => {
        Toast.hide();
    }

    render() {
        return (
            <div></div>
        )
    }
}