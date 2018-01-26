import * as React from "react";
const style = require("./HocAlert.css");
interface IOption {
    alertShow?: false,
    Title?: string,
    Content?: string,
    HideOk?: boolean,
    HideCancel?: boolean,
    Ok?: Function,
    Cancel?: Function,
    OkText?: string,
    CancelText?: string,
    OkColor?: string,
    CancelColor?: string
}
export const Enhance = (ComposedComponent: any, option: IOption) => class extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            alertShow: false,
            Title: "提示",
            Content: "内容区域",
            HideOk: false,
            HideCancel: false,
            Ok: null,
            Cancel: null,
            OkText: "确定",
            CancelText: "取消",
            OkColor: "#3a66b3",
            CancelColor: "gray",
            ...option,
        }


    }
    show = (params: any) => {
        let newState = Object.assign({}, this.state, params, { alertShow: true })
        this.setState(
            newState
        );
    }
    hide = (params: any) => {
        let newState = Object.assign({}, this.state, params, { alertShow: false })
        this.setState({
            alertShow: false
        });
    }
    componentDidMount() {
    }
    render() {
        let newProps = {
            showAlert: this.show,
            hideAlert: this.hide
        }
        return (
            <div>
                {
                    this.state.alertShow && (<div className={style.modal}>
                        <div className={style.alertContainer}>
                            <h3 className={style.alertTitle}>{this.state.Title}</h3>
                            <div className={style.alertContent}>
                                {this.state.Content}
                            </div>
                            <div className={style.alertBtn}>
                                <div style={{ color: this.state.OkColor }} className={style.alertBtnitem}>{this.state.OkText}</div>
                                <div style={{ color: this.state.CancelColor }} className={style.alertBtnitem} onClick={this.hide}>{this.state.CancelText}</div>
                            </div>
                        </div>
                    </div>)
                }
                <ComposedComponent {...this.props} {...newProps} />
            </div>

        )
    }
};