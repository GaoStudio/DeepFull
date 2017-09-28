import React, {Component} from 'react';
import './css/Special.css';
export default class Special extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Special">
                <img style={{width:75,height:75}} src={this.props.imagelogo}/>
                <div className="SpecialContent">
                    <div><span className="Title" >{this.props.title}</span></div>
                    <div><text>文章</text><text  style={{fontWeight:"bold"}}> : </text><text>{this.props.pagenum}篇</text></div>
                    <div><text>阅读</text><text  style={{fontWeight:"bold"}}> : </text><text>{this.props.readnum}</text></div>
                </div>
            </div>
        );
    }
}