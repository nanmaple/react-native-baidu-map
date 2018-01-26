"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const tabStyle = require("./TabView.css");
class TabsControl extends React.Component {
    constructor(props) {
        super(props);
        this.list = new Array();
        this.content = new Array();
        this.tabClick = (index) => {
            this.props.tabClick(index);
        };
        this.check_title_index = (index) => {
            return index === this.state.currentIndex ? tabStyle.active : tabStyle.tab_title;
        };
        this.check_item_index = (index) => {
            return index === this.state.currentIndex ? tabStyle.show : tabStyle.tab_item;
        };
        this.state = {
            currentIndex: 0
        };
        this.list = this.props.tabList;
        this.content = ["第一", "第二", "第三"];
    }
    render() {
        return (React.createElement("div", { className: tabStyle.tab_title_wrap }, this.list.map((item, index) => {
            return (React.createElement("div", { key: index, onClick: () => { this.tabClick(index); this.setState({ currentIndex: index }); }, className: this.check_title_index(index) }, item));
        })));
    }
}
exports.default = TabsControl;
//# sourceMappingURL=TabView.js.map