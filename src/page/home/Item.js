/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './Item.css';
import {
    Link,
} from 'react-router-dom'
class Item extends Component {
    render() {
        return(
            <div className="post-list-item">
                <Link className='post-link' to={{pathname:`${this.props.location.pathname}/5734857`}}>
                    <div className="post-list-content">
                        <img style={{width:'100%'}} src={require('../../images/glass.gif')}></img>
                        <div className="post-list-title">Hello World</div>
                        <div className="post-list-simple">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi consequatur corporis delectus dolorem, excepturi exercitationem id itaque labore laborum molestias nisi omnis quam quod rem sequi sunt, ut.</div>
                    </div>
                </Link>
                <div className="post-list-operation">
                    <div className="post-list-operation-item">
                        <span className="post-list-time">2018-01-01</span>
                    </div>
                    <div className="post-list-operation-item">
                        <span className="post-list-views">1314views</span>
                    </div>
                    <div className="post-list-operation-item">
                        <span className="post-list-category">java</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;