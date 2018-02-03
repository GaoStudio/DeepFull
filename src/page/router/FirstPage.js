/**
 * Created by Administrator.
 * Date at 2017/9/28.
 */
import React, {Component} from 'react';
import ImageZoom from 'react-medium-image-zoom'
export default class FirstPage extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (

            <div>
                <ImageZoom
                    image={{
                        src: 'http://www.baidu.com/img/bd_logo1.png',
                        alt: 'Picture of Mt. Cook in New Zealand',
                        style: {
                            width: '20em'
                        }
                    }}
                    zoomImage={{
                        src: 'http://www.baidu.com/img/bd_logo1.png',
                        alt: 'Picture of Mt. Cook in New Zealand',
                    }}
                />
            </div>
        );
    }
}