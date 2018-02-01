/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Drawer from 'react-motion-drawer';
import './Home.css';
import './home/Menu.css';
import Menu from './home/Menu'
import MobileMenu from './home/MobileMenu'
import Post from './home/Post'
import About from './home/About'
import Nopage from './home/Nopage'
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom'
import { enquireScreen } from './../utils/common';
import Article from "./home/Article";
import TimeLine from "./home/TimeLine";
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            openLeft:false,
            isMobile: false,

        }
    }
    componentDidMount(){
        enquireScreen((mobile) => {
            console.log("Home：："+mobile)
            this.setState({
                isMobile: mobile,
            });
        });
    }
    componentWillReceiveProps(nextProps){
        //当路由切换时,回到顶部
        //console.log(this.props.location)
        if(this.props.location.pathname !== nextProps.location.pathname){
            window.scrollTo(0,0)
        }
    }
    _onMobileMenuClick = ()=>{
        this.setState({ openLeft: true })
    }
    render(){
        return(
            <div className="container">
                {this.state.isMobile?<Drawer
                    width={"70%"}
                    open={this.state.openLeft}
                    overlayColor={"rgba(0,0,0,0.6)"}
                    npTouchClose={true}
                    drawerStyle = {{backgroundColor:'#4c4c4c'}}
                    onChange={open => this.setState({ openLeft: open })}>
                    <div>
                      <MobileMenu location={this.props.location}/>
                    </div>
                </Drawer>:null}
                {this.state.isMobile?
                    <div className="top">
                        <header className="logo">
                            <div className="mobile-menu-icon" onClick={this._onMobileMenuClick}><img src={require("../images/menu.png")}  ></img></div>
                            <div className="logo-img"><a><img src={require("../images/headlogo.png")}  ></img></a></div>
                            <div  className="logo-name" ><strong>Take the orange run</strong></div>
                        </header>
                    </div>:
                    <div className="left"> <div className="left-content"><Menu location={this.props.location}/></div></div>}
                <div className="right">
                    <div className="right-content">
                        <Switch>
                            <Route exact path="/" render={()=> <Redirect to="/Home"/>} />
                            <Route exact path="/about" render={props => <About {...props}/>} />
                            <Route exact path="/GameLive" render={props => <TimeLine isMobile={this.state.isMobile} {...props}/>} />
                            <Route exact path="/:path" render={props => <Post location={this.props.location} {...props}/>} />
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