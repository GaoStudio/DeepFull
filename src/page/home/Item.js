/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './Item.css';
import {
    Link,
} from 'react-router-dom'
import {host} from "../../utils/request";

class Item extends Component {
    render() {
        if(this.props.data){
            return(
                <div className="post-list-item">
                    <Link className='post-link' to={{pathname:`${this.props.location.pathname}/${this.props.data.bblog_id}`}}>
                        <div className="post-list-content">
                            {this.props.data.bblog_logo?<img style={{width:'100%'}} src={host+this.props.data.bblog_logo}></img>:null}
                            <div className="post-list-title">{this.props.data.bblog_title}</div>
                            <div className="post-list-simple">{this.props.data.bblog_sub_title}</div>
                        </div>
                    </Link>
                    <div className="post-list-operation">
                        <div className="post-list-operation-item">
                            <span className="post-list-time">{this.props.data.bblog_time}</span>
                        </div>
                        <div className="post-list-operation-item">
                            <span className="post-list-views">{this.props.data.bblog_views}views</span>
                        </div>
                        <div className="post-list-operation-item">
                            <span className="post-list-category">{this.props.data.blogCategory.bCategory_name}</span>
                        </div>
                    </div>
                </div>
            )
        }else {
            return(
                <div className="post-list-item">
                    <div className="post-list-content">
                        <div style={{width:'100%',height:'auto',display:'flex',alignItems:'center',flexDirection:'column'}}>
                            <img style={{width:200,height:200}} src={require("../../images/nothing.png")}></img>
                            <div className="post-list-title">暂无数据</div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
export default Item;