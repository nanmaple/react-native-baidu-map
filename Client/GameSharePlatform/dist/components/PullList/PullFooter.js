"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const constants_1 = require("./constants");
const pullStyle = require("../css/PullList.css");
class FooterNode extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        const { loaderState, hasMore } = this.props;
        let className = `pullStyle.pull_load_footer_default ${hasMore ? "" : "nomore"}`;
        return (React.createElement("div", { className: className }, loaderState === constants_1.STATS.loading ? React.createElement("i", null) : ""));
    }
}
exports.default = FooterNode;
//# sourceMappingURL=PullFooter.js.map