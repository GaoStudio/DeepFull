import React, {Component} from 'react';
import './css/Tag.css';
export default class Tag extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={"Tag"+" "+"tag-"+this.props.color+"-inverse"}>
                <text className={"TagText"+" "+"tag-"+this.props.color}>
                    {this.props.children}
                </text>
            </div>
        );
    }
}