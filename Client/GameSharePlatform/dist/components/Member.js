"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Hello_1 = require("./Hello");
class Member extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting" }, "Member"),
            React.createElement(Hello_1.default, { name: "hahahah" }),
            React.createElement("div", null,
                React.createElement("button", { onClick: onDecrement }, "-"),
                React.createElement("button", { onClick: onIncrement }, "+"))));
    }
}
exports.default = Member;
//# sourceMappingURL=Member.js.map