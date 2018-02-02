/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Markdown from 'react-markdown'
import CodeBlock from '../../components/CodeLock'
import './Article.css';
import NProgress from "nprogress";
import {GET} from "../../utils/request";
const initialSource = ''

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog:null,
            htmlMode: 'raw'
        }
    }
    componentDidMount(){
        console.log(this.props)
        let path = this.props.match.params.post;
        this.loadData(path);
    }
    componentWillReceiveProps(nextProps){
        let path = nextProps.match.params.post;
        this.loadData(path);
    }
    loadData=(path)=>{
        NProgress.start()
        GET("blog/blog?blogid="+path,(data)=>{
            if(data&&data.status===0){
                NProgress.done()
                console.log(data)
                this.setState({
                    blog:data.data,
                })
            }else {
                NProgress.done()
            }
        },(err)=>{
            NProgress.done()
        })
    }
    render() {
        if(!this.state.blog){
            return <div></div>
        }
        return (
            <div className="article">
                <div className="articleTitle">
                    <div className="articleName">{this.state.blog.blogBasic.bblog_title}</div>
                    <div className="articleDetail">
                        <span className="articleMark">{this.state.blog.blogBasic.bblog_time}</span>
                        <span className="articleMarkBy">BY</span>
                        <span className="articleMark">gaowei</span>
                        <span className="articleMarkBy"> - </span>
                        <span className="articleMark">{this.state.blog.blogBasic.bblog_views}</span>
                        <span className="articleMarkView">VIEWS</span>
                    </div>
                    <div className="articleDetailLine"></div>
                </div>
                <div className="articleContent">
                    <Markdown
                        className="result"
                        source={this.state.blog.blog_content}
                        skipHtml={this.state.htmlMode === 'skip'}
                        escapeHtml={this.state.htmlMode === 'escape'}
                        renderers={{code: CodeBlock}}
                    />
                </div>
            </div>
        )
    }
}
