import * as React from 'react';
import Routes from "./Route";
import "./Style/reset.css";
import "./Style/base.css";
import 'weui';
import 'react-weui/build/packages/react-weui.css';
export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    /**
     * 分享回调
     * @param status 分享结果类型 1.分享成功 0.取消分享 -1.分享失败
     */
    public WeChatShareHandler(status: number): void {
        console.log(status);
    };
    render() {
        return (
            <Routes />
        );
    }
}