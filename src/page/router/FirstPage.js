/**
 * Created by Administrator.
 * Date at 2017/9/28.
 */
import React, {Component} from 'react';
export default class FirstPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="FirstPage">
                {this.props.match.params.name}
            </div>
        );
    }
}