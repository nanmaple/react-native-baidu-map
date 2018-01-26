"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PullLoad_1 = require("../components/PullList/PullLoad");
const constants_1 = require("../components/PullList/constants");
const pullStyle = require("../components/css/PullList.css");
const defaultStyle = {
    width: "100%",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "1.5"
};
const loadMoreLimitNum = 2;
const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
];
class PullList extends React.Component {
    constructor(props) {
        super(props);
        this.handleAction = (action) => {
            console.info(action, this.state.action, action === this.state.action);
            //new action must do not equel to old action
            if (action === this.state.action ||
                action === constants_1.STATS.refreshing && this.state.action === constants_1.STATS.loading ||
                action === constants_1.STATS.loading && this.state.action === constants_1.STATS.refreshing) {
                console.info("It's same action or on loading or on refreshing ", action, this.state.action, action === this.state.action);
                return false;
            }
            if (action === constants_1.STATS.refreshing) {
                setTimeout(() => {
                    //refreshing complete
                    this.setState({
                        data: cData,
                        hasMore: true,
                        action: constants_1.STATS.refreshed,
                        index: loadMoreLimitNum
                    });
                }, 3000);
            }
            else if (action === constants_1.STATS.loading) {
                this.setState({
                    hasMore: true
                });
                setTimeout(() => {
                    if (this.state.index === 0) {
                        this.setState({
                            action: constants_1.STATS.reset,
                            hasMore: false
                        });
                    }
                    else {
                        this.setState({
                            data: [...this.state.data, cData[0], cData[0]],
                            action: constants_1.STATS.reset,
                            index: this.state.index - 1
                        });
                    }
                }, 3000);
            }
            //DO NOT modify below code
            this.setState({
                action: action
            });
        };
        this.state = {
            hasMore: true,
            data: cData,
            action: constants_1.STATS.init,
            index: loadMoreLimitNum //loading more test time limit
        };
    }
    render() {
        const { data, hasMore } = this.state;
        return (React.createElement("div", null,
            React.createElement(PullLoad_1.default, { className: "block", isBlockContainer: true, downEnough: 150, action: this.state.action, handleAction: this.handleAction, hasMore: hasMore, distanceBottom: 1000 },
                React.createElement("ul", { className: pullStyle.test_ul }, data.map((str, index) => {
                    return React.createElement("li", { key: index },
                        React.createElement("img", { src: str, alt: "" }));
                })))));
    }
}
exports.PullList = PullList;
//# sourceMappingURL=PullListTest.js.map