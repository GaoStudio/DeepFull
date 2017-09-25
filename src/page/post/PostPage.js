/**
 * Created by Administrator.
 * Date at 2017/9/12.
 */
import React, {Component} from 'react';
import './../Page.css';
import Tag from "./../../component/Tag.js"
import Special from "./../../component/Special.js"
import {Affix, Carousel, Card} from 'antd';
import 'antd/dist/antd.css';
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
                            <Carousel effect="fade" autoplay={true} dots={false}>
                                <img src={require("../../images/bg_bg01.jpg")} style={{height: 250}}></img>
                                <img src={require("../../images/bg_bg02.jpg")} style={{height: 250}}></img>
                                <img src={require("../../images/dusk-bg.png")} style={{height: 250}}></img>
                            </Carousel>
                        </div>
                        <div className="PostTopContent">
                            <img style={{width: 100, height: 100, borderRadius: 50}}
                                 src={require("../../images/timg.jpg")}></img>
                            <text style={{color: "#363636", fontWeight: 600, fontSize: 16, marginTop: 10}}>高卫的技术博客
                            </text>
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
                    <div className="PostCenter">

                        <div className="PostList">
                            left
                        </div>
                        <div className="PostSummary">
                            <Card title="标签" bordered={true} bodyStyle={{ padding: 5 }} style={{marginTop: 20,marginRight:20}}>
                                <div className="PostSummaryMark">
                                    <Tag color="pink">Java</Tag>
                                    <Tag color="red">Android</Tag>
                                    <Tag color="orange">React</Tag>
                                    <Tag color="green">React Native</Tag>
                                    <Tag color="cyan">React Navigation</Tag>
                                    <Tag color="blue">RxJava</Tag>
                                    <Tag color="purple">线程</Tag>
                                    <Tag color="pink">pink</Tag>
                                    <Tag color="red">red</Tag>
                                    <Tag color="orange">orange</Tag>
                                    <Tag color="green">green</Tag>
                                    <Tag color="cyan">cyan</Tag>
                                    <Tag color="blue">blue</Tag>
                                    <Tag color="purple">purple</Tag>
                                </div>
                            </Card>
                            <Card title="专题" bordered={true} bodyStyle={{ padding: 5 }} style={{marginTop: 20,marginRight:20}}>
                                <div className="PostSummaryMark">
                                    <Special imagelogo={require("./../../images/react-nav-logo.svg")} title="React Navigation全解析" pagenum={20} readnum = {20} />
                                    <div style={{backgroundColor:"#e8e8e8",height:1}}></div>
                                    <Special imagelogo={require("./../../images/regengxin.png")} title="热更新" pagenum={20} readnum = {20} />
                                    <div style={{backgroundColor:"#e8e8e8",height:1}}></div>
                                    <Special imagelogo={require("./../../images/react-nav-logo.svg")} title="React Navigation全解析" pagenum={20} readnum = {20} />
                                    <div style={{backgroundColor:"#e8e8e8",height:1}}></div>
                                    <Special imagelogo={require("./../../images/regengxin.png")} title="热更新" pagenum={20} readnum = {20} />
                                </div>
                            </Card>
                            <Card title="分类" bordered={true} bodyStyle={{ padding: 5 }} style={{marginTop: 20,marginRight:20}}>
                                <div className="PostSummaryMark">
                                    <Special imagelogo={require("./../../images/react-nav-logo.svg")} title="React Navigation全解析" pagenum={20} readnum = {20} />
                                    <div style={{backgroundColor:"#e8e8e8",height:1}}></div>
                                    <Special imagelogo={require("./../../images/regengxin.png")} title="热更新" pagenum={20} readnum = {20} />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}