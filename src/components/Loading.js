/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './components.css';
class Loading extends Component {
    render(){
        return(
            <div className="loadingContainer">
                <img className="loading" src={require("../images/loading.gif")}  ></img>
            </div>
        )
    }
}
export default Loading;