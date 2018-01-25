import React, {Component} from 'react';
import './components.css';
class LiveItem extends Component {
    render(){
        return(
            <div className="liveItemContainer">
                {this.props.data.content}
            </div>
        )
    }
}
export default LiveItem;