/**
 * Created by Administrator.
 * Date at 2017/9/8.
 */
import React, {Component} from 'react';
import './css/Google.css';
export default class Google extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div onClick={this.props.onClick} style={{height:this.props.size,width:this.props.size}} className="Google">
                <div className="Content">
                    {
                        this.props.visible?
                        <div className="Mark">
                            <div className="Red"></div>
                            <div className="Green"></div>
                            <div className="Yellow"></div>
                            <div className="Blue"></div>
                            <div className="WhiteLine"></div>
                            <div className="White"></div>
                            <div className="BlueLine"></div>
                        </div>:null
                    }
                </div>
            </div>
        );
    }
}