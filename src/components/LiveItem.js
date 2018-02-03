import React, {Component} from 'react';
import './components.css';
import MusicPlayer from "./MusicPlayer";
import ImageContainer from "./ImageContainer";
class LiveItem extends Component {
    render(){
        return(
            <div className="liveItemContainer">
                <div  className="liveItemMusic">
                    <MusicPlayer />
                </div>
                <div className="liveItemContent">
                    <ImageContainer images={[require('../images/img4.jpg')]}/>
                    {this.props.data.timeline_content}
                    <div className="liveItemfootbar">
                        <span className="liveItemfootbar-time">{this.props.data.timeline_time}</span>
                        <span className="liveItemfootbar-address">{this.props.data.timeline_address}</span>
                    </div>
                </div>

            </div>
        )
    }
}
export default LiveItem;