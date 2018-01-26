import * as React from 'react';
import Routes from "./Route";
import "./Style/Base/reset.css";
import "./Style/Base/base.css";

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Routes />
        );
    }
}