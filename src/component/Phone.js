import React, {Component} from 'react';
import './css/Phone.css';
import Google from './Google.js'
export default class App extends Component {
    render() {
        return (
            <div className="Container">
                <div className="Phone">
                    <div className="Top">
                        <div className="TopTwo">
                            <span className="Camera"></span>
                            <span className="Receiver"></span>
                        </div>
                        <span className="Sensor"></span>
                        <span style={{bottom: 5}} className="Sidesbar"></span>
                    </div>
                    <div className="Screen">
                    </div>
                    <div className="Bottom">
                        <span className="SidesbarBtom"></span>
                        <div className="BottomView">
                            <Google visible={false} size={"8vh"}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

