/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Home from './Home'
import Firstpage from './../page/router/FirstPage'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
class RootRoute extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" render={props => <Home {...props}/>} />
                </Switch>
            </Router>
        )
    }
}
export default RootRoute;