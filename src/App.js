import React, {Component} from 'react';
import './App.css';
import Phone from './component/Phone.js'
class App extends Component {
    constructor(props){
        super(props)
    }
   _onClick (){
        alert(10)
    }
    render() {
        return (
            <div className="App">
                <div className="App-left">

                </div>
                <div className="App-center">
                   <Phone/>
                   {/* <div className="phone-content"></div>*/}
                </div>
                <div className="App-right">

                </div>
            </div>
        );
    }
}
export default App;
