/**
 * Created by Administrator.
 * Date at 2017/9/28.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './TimeLine.css'
export default class TimeLine extends Component {
    constructor(props) {
        super(props)
        this.state= {
            height: [200, 320, 430, 150, 230, 100, 320, 430, 200, 150, 100, 200, 320],
            leftComponent:[],
            rightComponent:[],
            visibility:true
        }
        this.leftRef=null;
        this.rightRef=null;
        this.componentRef=[];
        this.leftHeight=0;
        this.rightHeight=0;
    }
    componentDidMount() {
        for (let i=0;i<this.state.height.length;i++){
            if(this.leftHeight<=this.rightHeight){
                this.state.leftComponent.push(this.state.height[i])
                this.leftHeight +=this.componentRef[i].scrollHeight
            }else {
                this.state.rightComponent.push(this.state.height[i])
                this.rightHeight +=this.componentRef[i].scrollHeight
            }
        }
        this.setState({
            leftComponent:this.state.leftComponent,
            rightComponent:this.state.rightComponent,
            visibility:false
        })
    }
    render() {
        return (
            <div  className="TimeLine">
                {this.state.visibility?<div style={{width:0}}>
                    {
                        this.state.height.map((item,index)=>{
                            return (<div ref={(ref)=>{ this.componentRef[index]=ref}} style={{width:'40%',height:item,marginTop:10,backgroundColor:'#f00'}}>
                                <div>{index}</div>
                            </div>)
                        })
                    }
                </div>:null}
                <div ref={(ref)=>{ this.leftRef=ref}} style={{width:'50%',backgroundColor:'#fff0',minHeight:20}}>
                    {
                        this.state.leftComponent.map((item,index)=>{
                            return (
                                <div className="left-item">
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad architecto cumque deserunt distinctio doloremque dolores eos impedit minus nam natus qui, sapiente sed ullam, vel velit voluptatem? Veritatis?
                                        SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。
                                    </div>
                                    <div className="corner">
                                        <div className="left-corner"></div>
                                    </div>
                                </div>
                                )
                        })
                    }
                </div>
                <div  ref={(ref)=>{ this.rightRef=ref}} style={{width:'50%',backgroundColor:'#fff0',minHeight:20}}>
                    {
                        this.state.rightComponent.map((item,index)=>{
                            return (
                                <div className="right-item">
                                    <div className="corner">
                                        <div className="right-corner"></div>
                                    </div>
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut beatae commodi debitis dignissimos eveniet hic ipsa iste libero minima molestias nostrum nulla optio praesentium quos sed, sequi totam veritatis!
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}