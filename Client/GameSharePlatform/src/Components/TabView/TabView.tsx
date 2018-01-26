import * as React from "react"
const tabStyle = require("./TabView.css");

interface Props {
    tabList:any[];
    tabClick(index: number): void;
}
class TabsControl extends React.Component<Props, any>{
    private list: string[] = new Array();
    private content: string[] = new Array();
    constructor(props: Props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
        this.list = this.props.tabList;
        this.content = ["第一", "第二", "第三"];
    }
    tabClick = (index:any) => {
        this.props.tabClick(index);
    }
    check_title_index = (index: number) => {

        return index === this.state.currentIndex ? tabStyle.active : tabStyle.tab_title;

    }

    check_item_index = (index: number) => {
        return index === this.state.currentIndex ? tabStyle.show : tabStyle.tab_item
    }

    render() {
        return (
                <div className={tabStyle.tab_title_wrap}>
                    {
                        this.list.map((item: any, index: any) => {
                            return (
                                <div key={index} onClick={() => { this.tabClick(index);this.setState({ currentIndex: index }) }} className={this.check_title_index(index)}>{item}</div>
                            )
                        })
                    }
                </div>
        )
    }
}

export default TabsControl