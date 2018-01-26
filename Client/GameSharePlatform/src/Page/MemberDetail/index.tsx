import * as React from 'react';
import { withRouter } from "react-router-dom";
import Tabs from "../../Components/TabView/TabView";
import BaseInformation from "./BaseInforMation";
import CheckAccount from "./CheckAccount";
import ScorerRecord from "./ChildScoreRecord";

const memDetailStyle = require("./style.css");
class MemberDetail extends React.Component<any, any> {

    private tabList: Array<string> = ["基本信息", "进取分记录", "查账"];
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }
    
    public tabClick = (index: number): any => {
        console.log(this.props);
        this.setState({
            selectedIndex: index
        });

    }
    public renderTabContent = (index: any): any => {
        switch (index) {
            case 0:
                return <BaseInformation />;
            case 1:
                return <ScorerRecord />
            case 2:
                return <CheckAccount />
            default:

                break;
        }
    }
    render() {
        return (
            <div className="hello">
                <Tabs tabList={this.tabList} tabClick={this.tabClick} />
                <div className={memDetailStyle.content}>
                    {
                        this.renderTabContent(this.state.selectedIndex)
                    }
                </div>

            </div>
        );
    }
}

export default MemberDetail;