import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {CSSTransitionGroup}  from 'react-transition-group';
import "./../Page.css"
export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={i} onClick={() => this.handleRemove(i)}>
                <div style={{width:100,height:20,backgroundColor:"#f00"}}>
                    {item}
                </div>
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </CSSTransitionGroup>
            </div>
        );
    }
}
