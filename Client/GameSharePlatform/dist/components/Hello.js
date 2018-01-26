"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
//import Alert from "./Alert";
const HOCAlert_1 = require("./Alert/HOCAlert");
const imgFB = require("../style/image/football.png");
class Hello extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.Click = () => {
            console.log(this.props);
            this.props.showAlert({ "Content": "hello world" });
        };
        this.state = {
            showAlert: false,
        };
    }
    render() {
        const { name } = this.props;
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting", onClick: this.Click },
                "Hello ",
                name,
                React.createElement("img", { src: imgFB, alt: "GG" }))));
    }
}
exports.default = HOCAlert_1.Enhance(Hello, { Content: "hahahah" });
//# sourceMappingURL=Hello.js.map