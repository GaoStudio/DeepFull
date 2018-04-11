import React, {Component} from 'react';
import './components.css';
import MusicPlayer from "./MusicPlayer";
import ImageContainer from "./ImageContainer";
class LiveItem extends Component {
    render(){
        return(
            <div className="liveItemContainer">
                {
                    this.props.data.timeMusic&&<div  className="liveItemMusic"><MusicPlayer data={this.props.data.timeMusic}/></div>
                }
                <div className="liveItemContent">
                    {this.props.data.timeline_images&&<ImageContainer images={this.props.data.timeline_images.split('|')}/>}
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