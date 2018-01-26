import * as React from 'react';
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';
// import PullList from "./component/recordList"
const recordStyle = require("./style.css");
export default class Manager extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={recordStyle.hello}>
                {/* <nav className={recordStyle.record_nav}>
                    <NavLink to={`${this.props.match.path}/home`} className={recordStyle.nav_link}>Home</NavLink>
                    <NavLink to={`${this.props.match.path}/about`} className={recordStyle.nav_link}>About</NavLink>
                    <NavLink to={`${this.props.match.path}/my`} className={recordStyle.nav_link}>My</NavLink>
                </nav> */}
                游戏记录
            </div>
        );
    }
}