import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Phone from './component/Phone.js'
class App extends Component {
    constructor(props){
        super(props)
        this.x = 10;
    }
   _onClick (){
        var x = 20;
        alert(this.x)
    }
    render() {
        return (
            <div className="App">
                <div className="App-left">
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-center">
                   <Phone/>
                   {/* <div className="phone-content"></div>*/}
                </div>
                <div className="App-right">
                    <div className="DidDemo"></div>
                    <button onClick={this._onClick.bind(this)}></button>
                </div>
            </div>
        );
    }
}
export default App;
