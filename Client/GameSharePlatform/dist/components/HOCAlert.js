"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style = require("./css/alert.css");
exports.Enhance = (ComposedComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.show = (params) => {
            let newState = Object.assign({}, this.state, params, { alertShow: true });
            this.setState(newState);
        };
        this.hide = (params) => {
            let newState = Object.assign({}, this.state, params, { alertShow: false });
            this.setState({
                alertShow: false
            });
        };
        this.state = {
            data: null,
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
            CancelColor: "gray"
        };
    }
    componentDidMount() {
        this.setState({ data: 'Hello' });
    }
    render() {
        let newProps = {
            showAlert: this.show,
            hideAlert: this.hide
        };
        return (React.createElement("div", null,
            this.state.alertShow && (React.createElement("div", { className: style.modal },
                React.createElement("div", { className: style.alertContainer },
                    React.createElement("h3", { className: style.alertTitle }, this.state.Title),
                    React.createElement("div", { className: style.alertContent }, this.state.Content),
                    React.createElement("div", { className: style.alertBtn },
                        React.createElement("div", { style: { color: this.state.OkColor }, className: style.alertBtnitem }, this.state.OkText),
                        React.createElement("div", { style: { color: this.state.CancelColor }, className: style.alertBtnitem, onClick: this.hide }, this.state.CancelText))))),
            React.createElement(ComposedComponent, Object.assign({}, this.props, newProps))));
    }
};
//# sourceMappingURL=HOCAlert.js.map