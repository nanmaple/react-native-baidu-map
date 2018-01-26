import * as React from 'react';
import {
    Link
} from 'react-router-dom';
import Http from "../base/utils/Http";
import { Storage } from "../base/utils/Storage";
const NetWork = new Http();
const Storages = new Storage();
const Url = "http://192.168.0.144:8888";
export default class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: "王"
        }
    }
    post = () => {
        NetWork.Post(Url, { a: "1" }, {}, this.successFun, this.failFun);
    }
    get = () => {
        NetWork.Get(Url, { a: "1" }, {}, this.successFun, this.failFun);
    }
    successFun = (data: string) => {
        console.log(data);
    }
    failFun = (data: string) => {
        console.log(data);
    }
    setLocal = () => {
        Storages.Set("name", this.state.value);
    }
    getLocal = () => {
        let value = `${Storages.Get("name")}${Math.random() * 100}`;
        this.setState({
            value: value
        });
    }
    handleChange = (event: any) => {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="home">
                <h1 onClick={this.post}>POST</h1>
                <h1 onClick={this.get}>GET</h1>
                <h1 onClick={this.setLocal}>本地存</h1>
                <h1 onClick={this.getLocal}>本地取</h1>
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}