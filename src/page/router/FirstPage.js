/**
 * Created by Administrator.
 * Date at 2017/9/28.
 */
import React, {Component} from 'react';
import Drawer from 'react-motion-drawer';
const style = {
    background: "#F9F9F9",
    boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
};
export default class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            openLeft:false
        }
    }
    _onChange=()=>{
        console.log('change')
    }
    render() {
        const { openLeft } = this.state;
        const drawerProps = {
            overlayColor: "rgba(255,255,255,0.6)",
            drawerStyle: style
        };
        return (
            <div>
                <Drawer
                    {...drawerProps}
                    width={this.state.width}
                    fadeOut={true}
                    open={openLeft}
                    onChange={open => this.setState({ openLeft: open })}
                >
                    <div style={{ padding: "2em" }}>
                        <h3>Navigation</h3>
                    </div>
                </Drawer>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper cyan accent-4">
                            <a href="#" className="brand-logo center">rm-drawer</a>
                            <ul className="left">
                                <li style={{ cursor: "pointer", height: "100%" }}>
                                    <a
                                        style={{ padding: 15 }}
                                        className=""
                                        onClick={() =>
                                            this.setState({ openLeft: !openLeft, openRight: false })}
                                    >
                                        <i className="fa fa-bars" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="options">
                    <form className="row">
                        <p className="col s4">
                            <label htmlFor="width">Set width</label>
                            <input
                                id="width"
                                type="text"
                                onChange={this.setWidth}
                                value={this.state.width}
                            />
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}