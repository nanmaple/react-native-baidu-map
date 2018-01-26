
interface Props {
    name: string;
    showAlert: Function;
    hideAlert: Function;
}
interface State {
    showAlert: boolean;
}
import * as React from 'react';
//import Alert from "./Alert";
import { Enhance } from "./Alert/HOCAlert";
const imgFB = require("../style/image/football.png");

class Hello extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            showAlert: false,
        }
    }
    Click = () => {
        console.log(this.props);
        this.props.showAlert({ "Content": "hello world" });
    }
    render() {
        const { name } = this.props;

        return (
            <div className="hello">
                <div className="greeting" onClick={this.Click}>
                    Hello {name}
                    <img src={imgFB} alt="GG" />
                </div>
            </div>
        );
    }
}
export default Enhance(Hello,{Content:"hahahah"});