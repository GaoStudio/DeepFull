/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './Article.css';
class About extends Component {
    render(){
        return(
            <div className="article">
                <div className="articleTitle">
                    <div className="articleName">About Me</div>
                    <div className="articleDetailLine"></div>
                </div>
                <div className="articleContent" style={{marginLeft:20, fontSize:18}}>
                    <div style={{marginBottom:20}}>
                        <span  style={{marginRight:10,color:'#333',fontWeight:'bold'}}>Email:</span><span><a style={{color:'#666'}} href="mailto:gaoweivf@aliyun.com">gaoweivf@aliyun.com</a></span>
                    </div>
                    <div style={{marginBottom:20}}>
                        <span style={{marginRight:10,color:'#333',fontWeight:'bold'}}>GitHub:</span><span><a style={{color:'#666'}} target="_blank" href="https://github.com/GaoStudio">@GaoStudio</a></span>
                    </div>
                    <div style={{marginBottom:20}}>
                        <span style={{marginRight:10,color:'#333',fontWeight:'bold'}}>Weibo:</span><span><a style={{color:'#666'}} target="_blank" href="https://weibo.com/u/3032597695">@TA来自陈国</a></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;