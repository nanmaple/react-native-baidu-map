import * as React from 'react';
const pullStyle = require("../css/PullList.css");

export default class HeadNode extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }
 

    render() {
        return (
            <div className={pullStyle.pull_load_head_default}>
                <i />
            </div>
        )
    }
}