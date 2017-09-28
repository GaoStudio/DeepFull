import React, {Component} from 'react';
import './css/Article.css';
import Tag from "./Tag.js"
export default class Article extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Article">
                <div><span className="ArticleTitle">React Navigation全解析</span></div>
                <div><span className="Content">Hello World 中文意思是『世界，你好』。因为《The C Programme Language》中使用它做为第一个演示程序，非常著名，所以后来的程序员在学习编程或进行设备调试时延续了这一习惯。</span></div>
                <div className="ArticleBottom">
                     <span>
                    <span className="ArticleDateImage">20</span>
                    <span className="ArticleDateText">2017/9/27</span>
                     </span>
                    <span>
                        <Tag color="pink">Java</Tag>
                        <Tag color="red">Android</Tag>
                    </span>
                </div>
            </div>
        )
    }
}