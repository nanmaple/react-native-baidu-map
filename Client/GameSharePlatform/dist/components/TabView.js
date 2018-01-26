"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tabStyle = require("./css/TabView.css");
class TabsControl extends React.Component {
    constructor(props) {
        super(props);
        this.list = new Array();
        this.content = new Array();
        this.state = {
            currentIndex: 0
        };
        this.list = ["Tab1", "Tab2", "Tab3"];
        this.content = ["第一", "第二", "第三"];
    }
    check_title_index(index) {
        return index === this.state.currentIndex ? "tabStyle.tab_title tabStyle.active" : "tabStyle.tab_title";
    }
    check_item_index(index) {
        return index === this.state.currentIndex ? "tabStyle.tab_item tabStyle.show" : "tabStyle.tab_item";
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: tabStyle.tab_title_wrap }, this.list.map((item, index) => {
                return (React.createElement("div", { key: index, onClick: () => { this.setState({ currentIndex: index }); }, className: this.check_title_index(index) }, item));
            })),
            React.createElement("div", { className: tabStyle.tab_item_wrap }, this.content[this.state.currentIndex])));
    }
}
exports.default = TabsControl;
//# sourceMappingURL=TabView.js.map