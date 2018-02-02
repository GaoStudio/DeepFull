import React, {Component} from 'react';
import './ImageContainer.css';
export default class ImageContainer extends Component {
    render() {
        return (
            <div className="ImageContainer">
                <div className="ImageContainerLine">
                    <div className="ImageType3">
                        <img src={this.props.images[0]} />
                    </div>
                    <div className="ImageType3">
                        <img src={this.props.images[1]} />
                    </div>
                    <div className="ImageType3">
                        <img src={this.props.images[2]} />
                    </div>
                </div>
                <div className="ImageContainerLine">
                    <div className="ImageType3">
                        <img src={this.props.images[2]} />
                    </div>
                    <div className="ImageType3">
                        <img src={this.props.images[0]} />
                    </div>
                    <div className="ImageType3">
                        <img src={this.props.images[1]} />
                    </div>
                </div>
            </div>
        )
    }
}