/**
 * Created by Administrator.
 * Date at 2017/9/12.
 */
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import './Page.css';
import FirstPage from './router/FirstPage.js'
import SecondPage from './router/SecondPage.js'
import TodoList from './router/TodoList.js'
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/haha">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/TodoList">TodoList</Link></li>
                    </ul>
                    <hr/>
                    <div >
                        <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            <Route exact path="/:name" component={FirstPage}/>
                            <Route path="/about" component={SecondPage}/>
                            <Route path="/TodoList" component = {TodoList}/>
                        </CSSTransitionGroup>
                    </div>

                </div>
            </Router>
        );
    }
}