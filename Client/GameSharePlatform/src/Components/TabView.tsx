import * as React from "react"
const tabStyle = require("./css/TabView.css");

class TabsControl extends React.Component<any, any>{
    private list: string[] = new Array();
    private content: string[] = new Array();
    constructor(props: any) {
        super(props)
        this.state = {
            currentIndex: 0
        }
        this.list = ["Tab1", "Tab2", "Tab3"];
        this.content = ["第一", "第二", "第三"];
    }

    check_title_index(index: number) {
        return index === this.state.currentIndex ? "tabStyle.tab_title tabStyle.active" : "tabStyle.tab_title"
    }

    check_item_index(index: number) {
        return index === this.state.currentIndex ? "tabStyle.tab_item tabStyle.show" : "tabStyle.tab_item"
    }

    render() {
        return (
            <div>
                { /* 动态生成Tab导航 */}
                <div className={tabStyle.tab_title_wrap}>
                    {
                        this.list.map((item: any, index: any) => {
                            return (
                                <div key={index} onClick={() => { this.setState({ currentIndex: index }) }} className={this.check_title_index(index)}>{item}</div>
                            )
                        })
                    }
                </div>
                { /* Tab内容区域 */}
                <div className={tabStyle.tab_item_wrap}>
                    {
                        this.content[this.state.currentIndex]
                    }
                </div>
            </div>
        )
    }
}

export default TabsControl