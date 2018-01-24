/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './Home.css';
import Menu from './home/Menu'
import Post from './home/Post'
import About from './home/About'
import Nopage from './home/Nopage'
import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import Article from "./home/Article";
import TimeLine from "./home/TimeLine";
class Home extends Component {
    componentWillReceiveProps(nextProps){
        //当路由切换时,回到顶部
        //console.log(this.props.location)
        if(this.props.location.pathname !== nextProps.location.pathname){
            window.scrollTo(0,0)
        }
    }
    render(){
        return(
            <div className="container">
                <div className="left">
                    <Menu location={this.props.location}/>
                </div>
                <div className="right">
                    <div className="right-content">
                        <Switch>
                            <Route exact path="/" render={()=> <Redirect to="/Home"/>} />
                            <Route exact path="/about" render={props => <About {...props}/>} />
                            <Route exact path="/timeline" render={props => <TimeLine {...props}/>} />
                            <Route exact path="/:path" render={props => <Post {...props}/>} />
                            <Route exact path="/:path/:post" render={props => <Article {...props}/>} />
                            <Route path="*" render={props => <Nopage {...props}/>} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;