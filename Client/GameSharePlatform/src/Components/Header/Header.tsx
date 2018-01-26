import * as React from 'react';
import {
    Link,
    Prompt
} from 'react-router-dom';
const headerStyle = require("./Header.css");
interface ITitle{
    title:string;
}
class Header extends React.Component<ITitle, any> {
    constructor(props: ITitle) {
        super(props);
        this.state = {
        }
    }
    render() {
        let {title} = this.props;
        return (
            <div className={headerStyle.memberManage}>
               <div className={headerStyle.back}>返回</div>
               <div className={headerStyle.title}>{title}</div>
               <div className={headerStyle.action}>Action</div>
            </div>
        );
    }
}
export default Header;