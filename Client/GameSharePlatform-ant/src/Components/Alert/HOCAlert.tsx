import * as React from 'react';

import { Modal } from 'antd-mobile';
const alert = Modal.alert;

const style = require("./HocAlert.css");
interface IOption {
    title?: string,   //标题
    content?: any,    //内容
    buttons?: {}[]    //按钮
}
/**
 * alert高阶组件
 * @param ComposedComponent 组件
 * @param option  参数
 */
export const HocAlert = (ComposedComponent: any, option?: IOption) => class extends React.Component<any, any> {
    private alertModal: any;
    constructor(props: any) {
        super(props);
        this.state = {
            showAlert: false,
            title: "提示",
            content: "内容区域",
            buttons: [
                {
                    type: 'default',
                    label: '取消',
                    onClick: this.hide
                },
                {
                    type: 'primary',
                    label: '确定',
                    onClick: this.hide
                }
            ],
            ...option
        }
    }
    /**
     * 显示alert
     * @param params 接口IOption类型
     */
    show = (params: any) => {
        let newState = Object.assign({}, this.state, params, { showAlert: true });
        this.alertModal = alert(newState.title, newState.content, [
            {
                text: newState.buttons[0].label, onPress: () => {
                    if (typeof newState.buttons[0].onClick === "function") {
                        newState.buttons[0].onClick();
                    }
                }
            },
            {
                text: newState.buttons[1].label, onPress: () => {
                    if (typeof newState.buttons[1].onClick === "function") {
                        newState.buttons[1].onClick();
                    }
                }
            },
        ])
    }
    /**
     * 隐藏alert
     * @param params 接口IOption类型
     */
    hide = (params: any) => {
        this.alertModal && this.alertModal.hide();
    }
    render() {
        let newProps = {
            showAlert: this.show,
            hideAlert: this.hide
        }
        return (
            <ComposedComponent {...this.props} {...newProps} />
        )
    }
};