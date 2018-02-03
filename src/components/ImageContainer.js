import React, {Component} from 'react';
import './ImageContainer.css';
export default class ImageContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            images:this.props.images
        }
    }
    _renderImage=(current,length)=>{
        let views =[];
        {
            for(let i = 0;i<length;i++) {
                views.push(
                    <div className="ImageType3">
                        {this.state.images[current*3+i]!=undefined?<img className="ImageImg" src={this.state.images[current*3+i]}/>:null}
                    </div>
                )
            }
        }
        return views;
    }
    _renderImage356=(length)=>{
        console.log('_renderImage356')
        let len =  length==3?1:2;
        let views =[];
        {
            for(let i = 0;i<len;i++) {
                views.push(
                    <div className="ImageContainerLine">
                        {this._renderImage(i,3)}
                    </div>
                )
            }
        }
        return views;
    }
    _renderImage1=()=>{
        console.log('_renderImage1')
        return(
            <div className="ImageType">
                <img className="ImageImg" src={this.state.images[0]}/>
            </div>
        )
    }
    _renderImage24=(length)=>{
        console.log('_renderImage24')
        let len =  length==2?1:2;
        let views =[];
        {
            for(let i = 0;i<len;i++) {
                views.push(
                    <div className="ImageContainerLine">
                        {
                            this.state.images.slice(i*2,(i+1)*2).map((item) => {
                            return (
                                <div className="ImageType2">
                                    <img className="ImageImg" src={item}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        }
        return views;
    }
    render() {
        let length = this.state.images.length;
        console.log(length)
        return (
            <div className="ImageContainer">
                {
                    (length==3||length==5||length==6)?this._renderImage356(length):length==1?this._renderImage1():this._renderImage24(length)
                }
            </div>
        )
    }
}