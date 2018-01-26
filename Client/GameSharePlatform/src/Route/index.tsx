import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import Home from '../page/Home';
import Manager from '../Page/Manager';
import Login from '../page/Login';
import MemberDetail from '../Page/MemberDetail';
import { LoginRoute, HomeRoute, ManagerRoute, MemberDetailRoute } from './Config';

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path={LoginRoute} component={Login} />
                    <Route exact path={HomeRoute} component={Home} />
                    <Route path={ManagerRoute} component={Manager} />
                    <Route path={MemberDetailRoute} component={MemberDetail} />
                </div>
            </BrowserRouter>
        );
    }
}