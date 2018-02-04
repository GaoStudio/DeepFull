/**
 * Created by Administrator.
 * Date at 2017/9/28.
 */
import React, {Component} from 'react';
import LiveItem from '../../components/LiveItem'
import './TimeLine.css'
import NProgress from "nprogress";
import {GET} from "../../utils/request";
export default class TimeLine extends Component {
    constructor(props) {
        super(props)
        this.state= {
            height: [200, 320, 430, 150, 230, 100, 320, 430, 200, 150, 100, 200, 320],
            data:[],
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
    componentDidMount(){
        this.loadData();
    }
    loadData=()=>{
        NProgress.start()
        GET("blog/timeline",(data)=>{
            if(data&&data.status===0){
                NProgress.done()
                console.log(data)
                this.setState({
                    data:data.data,
                })
                this._onLayout();
            }else {
                NProgress.done()
            }
        },(err)=>{
            NProgress.done()
        })
    }
    _onLayout=()=>{
        for (let i=0;i<this.state.data.length;i++){
            if(this.leftHeight<=this.rightHeight){
                this.state.leftComponent.push(this.state.data[i])
                this.leftHeight +=this.componentRef[i].scrollHeight
            }else {
                this.state.rightComponent.push(this.state.data[i])
                this.rightHeight +=this.componentRef[i].scrollHeight
            }
        }
        this.setState({
            leftComponent:this.state.leftComponent,
            rightComponent:this.state.rightComponent,
            visibility:false
        })
    }
    _renderLeftItem=(item,index)=>{
        return(
            <div key={index} className="item">
                <div className="left-item">
                    <LiveItem data={item}/>
                </div>
                <div className="corner">
                    <div className="left-corner"></div>
                    <div className="left-line"></div>
                    <div className="left-icon"></div>
                </div>
            </div>
        )
    }
    _renderRightItem=(item,index)=>{
        return(
            <div key={index} className="item">
                <div className="corner corner2">
                    <div className="right-icon"></div>
                    <div className="right-line"></div>
                    <div className="right-corner"></div>
                </div>
                <div className="right-item">
                    <LiveItem data={item}/>
                </div>
            </div>
        )
    }
    _preRender=()=>{
        return(
            <div style={{width:0}}>
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <div key={index}  className="item" ref={(ref)=>{ this.componentRef[index]=ref}}>
                                <LiveItem data={item}/>
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    render() {
        return (
            <div className="TimeLine">
                {this.state.visibility?this._preRender():null}
                <div className="spinerLine"></div>
                {!this.props.isMobile?
                    <div ref={(ref)=>{ this.leftRef=ref}} className="spinerItem">
                        {
                            this.state.leftComponent.map((item,index)=>{
                                return (this._renderLeftItem(item,index))
                            })
                        }
                    </div>:
                    null
                }
                {
                    !this.props.isMobile?
                        <div  ref={(ref)=>{ this.rightRef=ref}} className="spinerItem">
                            {
                                this.state.rightComponent.map((item,index)=>{
                                    return (this._renderRightItem(item,index))
                                })
                            }
                        </div>:
                        <div  ref={(ref)=>{ this.rightRef=ref}} className="spinerItem">
                            {
                                this.state.data.map((item,index)=>{
                                    return (this._renderRightItem(item,index))
                                })
                            }
                        </div>
                }

            </div>
        );
    }
}