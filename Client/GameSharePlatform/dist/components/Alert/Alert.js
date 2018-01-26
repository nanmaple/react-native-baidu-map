"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style = require("./css/alert.css");
class Alert extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.alert ? (React.createElement("div", { className: style.alertContainer },
            React.createElement("h3", { className: style.alertTitle }, "\u6807\u9898"),
            React.createElement("div", { className: style.alertContent }, "\u63D0\u793A\u4FE1\u606F"),
            React.createElement("div", { className: style.alertBtn },
                React.createElement("div", { className: style.alertBtnSure }, "\u786E\u5B9A"),
                React.createElement("div", { className: style.alertBtnCancle }, "\u53D6\u6D88")))) : null;
    }
}
exports.default = Alert;
//# sourceMappingURL=Alert.js.map