/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Item from './Item.js'
import './Post.css';
class Post extends Component {
    render(){
        return(
            <div>
                <Item location={this.props.location}/>
            </div>
        )
    }
}
export default Post;