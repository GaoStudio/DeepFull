import React, {Component} from 'react';
import './ImageContainer.css';
import ImageZoom from 'react-medium-image-zoom'
import {host} from '../utils/request'
export default class ImageContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            images: this.props.images,
            widthHeight: [],

        }
    }
    componentDidMount(){
        let widthHeightTemp = [];
        let end = 0;
        for(let i = 0;i<this.props.images.length;i++){
            var img_url = host+this.props.images[i];
            var img = new Image();
            img.src = img_url;
            img.onload = function(){
                widthHeightTemp.push({x:img.width,y:img.height})
                end++;
                if(end=this.props.images.length){
                    this.setState({
                        widthHeight:widthHeightTemp
                    })
                }
            };
        }
    }
    _renderImage=(current,length)=>{
        let views =[];
        {
            for(let i = 0;i<length;i++) {
                views.push(
                    <div className="ImageType3">
                        {this.state.images[current*3+i]!=undefined?
                            <ImageZoom
                                image={{
                                    src: host+this.state.images[current*3+i],
                                    alt: 'Picture of Mt. Cook in New Zealand',
                                    className:'ImageImg'
                                }}
                                zoomImage={{
                                    src: host+this.state.images[current*3+i],
                                    alt: 'Picture of Mt. Cook in New Zealand',
                                }}
                            />
                            :null}
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
                <ImageZoom
                    image={{
                        src: host+this.state.images[0],
                        alt: 'Picture of Mt. Cook in New Zealand',
                        className:'ImageImg'
                    }}
                    zoomImage={{
                        src: host+this.state.images[0],
                        alt: 'Picture of Mt. Cook in New Zealand',
                    }}
                />
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
                                let widthTheight = true;
                                if(this.state.widthHeight>0){
                                    this.state.widthHeight[i].x<this.state.widthHeight[i].x?widthTheight=false:widthTheight=true
                                }
                                return (
                                    <div className="ImageType2">
                                        <ImageZoom
                                            image={{
                                                src: host+item,
                                                alt: 'Picture of Mt. Cook in New Zealand',
                                                className:widthTheight?'ImageImgV':'ImageImgH'
                                            }}
                                            zoomImage={{
                                                src: host+item,
                                                alt: 'Picture of Mt. Cook in New Zealand',
                                            }}
                                        />
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

        return (
            <div className="ImageContainer">
                {
                    (length==3||length==5||length==6)?this._renderImage356(length):length==1?this._renderImage1():this._renderImage24(length)
                }
            </div>
        )
    }
}