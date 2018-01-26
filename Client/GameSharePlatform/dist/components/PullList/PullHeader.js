"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const pullStyle = require("../css/PullList.css");
class HeadNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: pullStyle.pull_load_head_default },
            React.createElement("i", null)));
    }
}
exports.default = HeadNode;
//# sourceMappingURL=PullHeader.js.map