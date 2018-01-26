"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const switchStyle = require("./css/SwitchButton.css");
class SwitchButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("input", { className: switchStyle.mui_switch, type: "checkbox" }),
            React.createElement("input", { className: switchStyle.mui_switch, type: "checkbox", defaultChecked: true }),
            React.createElement("input", { className: switchStyle.mui_switch_animbg, type: "checkbox" }),
            React.createElement("input", { className: switchStyle.mui_switch_animbg, type: "checkbox", defaultChecked: true }),
            React.createElement("input", { className: switchStyle.mui_switch_anim, type: "checkbox" }),
            React.createElement("input", { className: switchStyle.mui_switch_anim, type: "checkbox", defaultChecked: true })));
    }
}
exports.default = SwitchButton;
//# sourceMappingURL=SwitchButton.js.map