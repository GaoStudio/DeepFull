/**
 * Created by Administrator.
 * Date at 2017/9/12.
 */
import React, {Component} from 'react';
import './../Page.css';
import {Affix, Carousel} from 'antd';
export default class PostPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="PostPage">
                <div className="PostContent">
                    <div className="PostTop">
                        <div className="PostTopBg">
                            <Carousel effect="fade" autoplay = {true} dots = {false}>
                                <img src={require("../../images/bg_bg01.jpg")} style={{height:250}}></img>
                                <img src={require("../../images/bg_bg02.jpg")} style={{height:250}}></img>
                                <img src={require("../../images/dusk-bg.png")}  style={{height:250}}></img>
                            </Carousel>
                        </div>
                        <div className="PostTopContent">
                            <img style={{width: 100, height: 100, borderRadius: 50}}
                                 src={require("../../images/timg.jpg")}></img>
                            <text style={{color: "#363636", fontWeight: 600, fontSize: 16, marginTop: 10}}>Deep</text>
                        </div>
                        <div className="Sign">
                            <Affix style={{width: "100%"}}>
                                <div className="PostSignTop">
                                    <text style={{backgroundColor: "#ffffff88", color: "#ffffff", fontSize: 20}}>
                                        梦想这东西和经典一样,永远不会因为时间而褪色，反而更加珍贵。
                                    </text>
                                </div>
                            </Affix>
                        </div>
                        <div className="navigator">
                            <Affix offsetTop={5}>
                                <div className="PageControlTop">
                                    <img style={{width: 40, height: 40}}
                                         src={require("../../images/home_hover.png")}></img>
                                    <img style={{width: 40, height: 40}} src={require("../../images/more.png")}></img>
                                </div>
                            </Affix>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}