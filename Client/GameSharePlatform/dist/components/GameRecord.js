"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class GameRecord extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting" }, "GameRecord"),
            React.createElement("div", null,
                React.createElement("button", { onClick: onDecrement }, "-"),
                React.createElement("button", { onClick: onIncrement }, "+"))));
    }
}
exports.default = GameRecord;
//# sourceMappingURL=GameRecord.js.map