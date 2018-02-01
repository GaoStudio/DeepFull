/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Item from './Item.js'
import './Post.css';
import {GET} from "../../utils/request";
import NProgress from 'nprogress'
class Post extends Component {
    constructor(props){
        super(props)
        this.state= {
            blogList: [],
        }
    }
    componentDidMount(){
        this.loadData();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.location&&nextProps.location.state){
            this.loadData();
        }
    }
    loadData=()=>{
        NProgress.start()
        console.log(this.props)
        let path = this.props.location.state?this.props.location.state.bCategory_path:this.props.match.params.path;
        console.log(path)
        GET("blog/blogs?path="+path,(data)=>{
            if(data&&data.status===0){
                NProgress.done()
                this.setState({
                    blogList:data.data,
                })
            }else {
                NProgress.done()
            }
        },(err)=>{
            NProgress.done()
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.blogList.map((item)=>{
                        return <Item key={item.bblog_id} data={item} location={this.props.location}/>
                    })
                }

            </div>
        )
    }
}
export default Post;