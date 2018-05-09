import * as React from 'react';
import { DatePicker } from 'antd-mobile';
import 'antd-mobile/lib/date-picker/style/css';
import { Time } from "../../Utils/Time";

export default class GPDatePicker extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visiable: false,
            value: this.props.value ? new Date(this.props.value) : null
        }
    }

    public Show = (isShow: boolean): void => {
        this.setState({ visiable: isShow });
    }

    public onOk = (value: any): void => {
        this.setState({ visiable: false,value:value });
        if (typeof this.props.onOk === "function") {
            let newDate = Time.GetNextMonth(value, 0);
            this.props.onOk(newDate);
        }
    }

    public onDismiss = (): void => {
        this.setState({ visiable: false });
    }

    render() {
        return (
            <DatePicker
                mode="date"
                visible={this.state.visiable}
                value={this.state.value}
                onOk={this.onOk}
                onDismiss={this.onDismiss}
            />
        )
    }
}