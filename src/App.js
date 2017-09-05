import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-left">
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-center">
                    <div className="phone-content"></div>
                </div>
                <div className="App-right">
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}
export default App;
