import React, {Component} from 'react';
import './css/Phone.css';
import Google from './Google.js'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            opening:false
        }
    }
    _openPhone = ()=>{
        this.setState({
            opening:!this.state.opening
        })
    }
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
                            <Google onClick={this._openPhone} visible={this.state.opening} size={"8vh"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

