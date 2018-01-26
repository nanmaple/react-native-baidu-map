import * as React from 'react'
import { render } from 'react-dom'
import PullLoad from "../../../../components/PullList/PullLoad";
import { STATS } from "../../../../components/PullList/constants";
const pullStyle = require("../../../components/css/PullList.css");

const defaultStyle = {
    width: "100%",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "1.5"
}

const loadMoreLimitNum = 2;

const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]

class PullList extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            hasMore: true,
            data: cData,
            action: STATS.init,
            index: loadMoreLimitNum //loading more test time limit
        }
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.location != this.props) {
            console.log(this.props);
            let type = nextProps.location.pathname.split("/")[3];
            console.log(type);
        }

    }
    handleAction = (action: any) => {
        console.info(action, this.state.action, action === this.state.action);
        //new action must do not equel to old action
        if (action === this.state.action ||
            action === STATS.refreshing && this.state.action === STATS.loading ||
            action === STATS.loading && this.state.action === STATS.refreshing) {
            console.info("It's same action or on loading or on refreshing ", action, this.state.action, action === this.state.action);
            return false
        }

        if (action === STATS.refreshing) {//刷新
            setTimeout(() => {
                //refreshing complete
                this.setState({
                    data: cData,
                    hasMore: true,
                    action: STATS.refreshed,
                    index: loadMoreLimitNum
                });
            }, 3000)
        } else if (action === STATS.loading) {//加载更多      
            this.setState({
                hasMore: true
            });
            setTimeout(() => {
                if (this.state.index === 0) {
                    this.setState({
                        action: STATS.reset,
                        hasMore: false
                    });
                } else {
                    this.setState({
                        data: [...this.state.data, cData[0], cData[0]],
                        action: STATS.reset,
                        index: this.state.index - 1
                    });
                }
            }, 3000)
        }

        //DO NOT modify below code
        this.setState({
            action: action
        })
    }

    render() {
        const {
      data,
            hasMore
    } = this.state

        return (
            <div>
                <PullLoad
                    className="block"
                    isBlockContainer={true}
                    downEnough={150}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    hasMore={hasMore}
                    distanceBottom={1000}>
                    <ul className={pullStyle.test_ul}>
                        {
                            data.map((str: any, index: any) => {
                                return <li key={index}><img src={str} alt="" /></li>
                            })
                        }
                    </ul>
                </PullLoad>
            </div>
        )
    }
}

export default PullList;