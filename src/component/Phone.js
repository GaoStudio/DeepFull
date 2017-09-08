import React, {Component} from 'react';
import './css/Phone.css';
import Google from './Google.js'
export default class App extends Component {
    render() {
        return (
            <div className="Container">
                <div className="Topbar"></div>
                <div className="Sidesbar"></div>
                <div className="SidesbarBottom"></div>
                <div className="Phone">
                    <div className="Top">
                        <span className="Camera"></span>
                        <span className="Receiver"></span>
                        <span className="Sensor"></span>
                    </div>
                    <div className="Screen">
                    </div>
                    <div className="Bottom">
                        <div className="BottomView">
                            <Google visible={true} size={"8vh"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

