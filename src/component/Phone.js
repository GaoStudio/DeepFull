import React, {Component} from 'react';
import './Phone.css';
class App extends Component {
    render() {
        return (
        <div className="Phone">
            <div className="Top">
                <div className="TopTwo">
                    <span className="Camera"></span>
                    <span className="Receiver"></span>
                </div>
                <span className="Sensor"></span>
            </div>
            <div className="Screen">

            </div>
        </div>
        );
    }
}
export default App;
