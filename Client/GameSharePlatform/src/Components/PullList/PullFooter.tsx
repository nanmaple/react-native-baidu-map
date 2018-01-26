import * as React from 'react';
import { STATS } from './constants';
const pullStyle = require("../css/PullList.css");
interface Props {
    loaderState: string;
    hasMore: boolean;

}

export default class FooterNode extends React.PureComponent<Props, any> {
    constructor(props: Props) {
        super(props);

    }
    componentDidMount(){

    }
    render() {
        const { loaderState, hasMore } = this.props;

        let className = `pullStyle.pull_load_footer_default ${hasMore ? "" : "nomore"}`

        return (
            <div className={className}>
                {
                    loaderState === STATS.loading ? <i /> : ""
                }
            </div>
        )
    }
}