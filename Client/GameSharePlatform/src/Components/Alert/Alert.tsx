import * as React from "react";
const style = require("./css/alert.css");
interface Props {
    alert: boolean;
}
class Alert extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return this.props.alert ? (<div className={style.alertContainer}>
            <h3 className={style.alertTitle}>标题</h3>
            <div className={style.alertContent}>
                提示信息
            </div>
            <div className={style.alertBtn}>
                <div className={style.alertBtnSure}>确定</div>
                <div className={style.alertBtnCancle}>取消</div>
            </div>
        </div>) : null
    }
}
export default Alert;