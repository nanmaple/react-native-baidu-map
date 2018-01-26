"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Http_1 = require("../base/utils/Http");
const Storage_1 = require("../base/utils/Storage");
const NetWork = new Http_1.default();
const Storages = new Storage_1.Storage();
const Url = "http://192.168.0.144:8888";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.post = () => {
            NetWork.Post(Url, { a: "1" }, {}, this.successFun, this.failFun);
        };
        this.get = () => {
            NetWork.Get(Url, { a: "1" }, {}, this.successFun, this.failFun);
        };
        this.successFun = (data) => {
            console.log(data);
        };
        this.failFun = (data) => {
            console.log(data);
        };
        this.setLocal = () => {
            Storages.Set("name", this.state.value);
        };
        this.getLocal = () => {
            let value = `${Storages.Get("name")}${Math.random() * 100}`;
            this.setState({
                value: value
            });
        };
        this.handleChange = (event) => {
            this.setState({ value: event.target.value });
        };
        this.state = {
            value: "王"
        };
    }
    render() {
        return (React.createElement("div", { className: "home" },
            React.createElement("h1", { onClick: this.post }, "POST"),
            React.createElement("h1", { onClick: this.get }, "GET"),
            React.createElement("h1", { onClick: this.setLocal }, "\u672C\u5730\u5B58"),
            React.createElement("h1", { onClick: this.getLocal }, "\u672C\u5730\u53D6"),
            React.createElement("input", { type: "text", name: "name", value: this.state.value, onChange: this.handleChange })));
    }
}
exports.default = Home;
//# sourceMappingURL=NetWorkTest.js.map