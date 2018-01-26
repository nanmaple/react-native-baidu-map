"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const headerStyle = require("./Header.css");
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { title } = this.props;
        return (React.createElement("div", { className: headerStyle.memberManage },
            React.createElement("div", { className: headerStyle.back }, "\u8FD4\u56DE"),
            React.createElement("div", { className: headerStyle.title }, title),
            React.createElement("div", { className: headerStyle.action }, "Action")));
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map