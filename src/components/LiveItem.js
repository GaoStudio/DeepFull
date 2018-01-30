import React, {Component} from 'react';
import './components.css';
import MusicPlayer from "./MusicPlayer";
class LiveItem extends Component {
    render(){
        return(
            <div className="liveItemContainer">
                {this.props.data.content}
                <MusicPlayer />
                <div className="liveItemfootbar">
                    <span className="liveItemfootbar-time">30 April 2015, Sunday</span>
                    <span className="liveItemfootbar-address">Beijing</span>
                </div>
                <div  className="liveItemMusic">

                </div>
            </div>
        )
    }
}
export default LiveItem;