/**
 * Created by Administrator.
 * Date at 2017/9/12.
 */
import React, {Component} from 'react';
import './../Page.css';
export default class PostPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="PostPage">
                <div className="PostContent">
                    <div className="PostTop">
                        <div className="PageControlTop">
                            <img style={{width:40,height:40}} src={require("../../images/home.png")}></img>
                            <img style={{width:40,height:40}} src={require("../../images/more.png")}></img>
                        </div>
                        <div className="PostPageTop">
                            <img style={{width:100,height:100,borderRadius:50}}  src={require("../../images/head.gif")}></img>
                            <text style={{color:"#363636",fontWeight: 600,fontSize:16,marginTop:10}}>Deep</text>
                            <text style={{color:"#a9a9a9",fontSize:20,marginTop:10}}>梦想这东西和经典一样,永远不会因为时间而褪色，反而更加珍贵。</text>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}