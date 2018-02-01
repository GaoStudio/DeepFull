/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import './Menu.css';
import Loading from '../../components/Loading'
import {GET} from '../../utils/request'
import {
    Link,
} from 'react-router-dom'
class Menu extends Component {
    constructor(props){
        super(props)
        this.state= {
            loading: true,
            categoryList: [],
            select:0,
        }
    }
    componentDidMount(){
        this.loadData();
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.location&&nextProps.location.state){
           this.setState({
               select:nextProps.location.state.bCategory_id
           })
        }else if(this.state.categoryList.length>0){
            this.setState({
                select:this.state.categoryList[0].bCategory_id
            })
        }
    }
    loadData=()=>{
        GET("blog/category",(data)=>{
            if(data&&data.status===0){
                this.setState({
                    categoryList:data.data,
                    select:data.data[0].bCategory_id,
                    loading:false,
                })
            }else {
                this.setState({
                    loading:false,
                })
            }
        },(err)=>{
            this.setState({
                loading:false,
            })
        })
    }
    render() {
        let _this = this;
        return (
                <div>
                    <header className="logo">
                        <div className="logo-img"><Link to={{pathname:`/${ this.state.categoryList[0]&&this.state.categoryList[0].bCategory_path}`,state:this.state.categoryList[0]}}><img src={require("../../images/headlogo.png")}  ></img></Link></div>
                        <div  className="logo-name" ><strong>Take the orange run</strong></div>
                    </header>
                    <div className="left-nav">
                        <div className="nav-title" ><span>Focus on mobile development</span></div>
                        {this.state.loading?
                            <div className="nav-menu">
                                <Loading />
                            </div>:
                            <div className="nav-menu">
                                <div className="menu">
                                    <ul>
                                        {
                                            this.state.categoryList.map((item,i)=>{
                                                return  _this.state.select===item.bCategory_id?
                                                    <li key={i}><Link to={{pathname:`/${item.bCategory_path}`,state:item}} className="selected">{item.bCategory_name}</Link></li>:
                                                    <li key={i}><Link to={{pathname:`/${item.bCategory_path}`,state:item}} className="noselect">{item.bCategory_name}</Link></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                        <div className="nav-search">
                            <div className="search">
                                <input className="searchContent" placeholder="请输入关键词" type="text" />
                                <input value="" className="searchSubmit" type="submit" />
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <Link to="/about"><div style={{color:'#999'}}>About Me</div></Link>
                        <div>©DeepFull.com</div>
                    </footer>
                </div>
        )
    }
}

export default Menu;