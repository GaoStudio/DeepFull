import React, {Component} from 'react';
import './App.css';

class App extends Component {


    componentDidMount(){
       this._handleScroll();
    }
    componentWillUnmount(){

    }
    _handleScroll(toPage){
        var body = document.body,
            html = document.documentElement;
        var itv, height = document.body.offsetHeight;
        var page = scrollTop() / height | 0;
        if(toPage){
            page =toPage;
            if(page==0){
                move();
            }else{
                moveDown();
            }
        }else {
            window.addEventListener("resize", onresize, false);
            onresize();
        }
        document.body.removeEventListener("onwheel" in document ? "wheel" : "mousewheel",()=>{})
        document.body.addEventListener(
            "onwheel" in document ? "wheel" : "mousewheel",
            function(e) {
                clearTimeout(itv);
                itv = setTimeout(function() {
                    var delta = e.wheelDelta / 120 || -e.deltaY / 3;
                    page -= delta;
                    var max = (document.body.scrollHeight / height | 0) - 1;
                    if (page < 0) return page = 0;
                    // if (page > max) return page = max;
                    if(page==0){
                        move();
                    }else{
                        moveDown();
                    }

                }, 100);
                e.preventDefault();
            }
        );
        function moveDown() {
            var value = height *0.2* page;
            var diff = scrollTop() - value;
            (function callee() {
                diff = diff / 1.2 | 0;
                scrollTop(value + diff);
                if (diff) itv = setTimeout(callee, 16);
            })();
        };
        //ƽ۬ٶ֯
        function move() {
            var value = height * page;
            var diff = scrollTop() - value;
            (function callee() {
                diff = diff / 1.2 | 0;
                scrollTop(value + diff);
                if (diff) itv = setTimeout(callee, 10);
            })();
        };
        function onresize() {
            height = body.offsetHeight;
            move();
        };
        function scrollTop(v) {
            if (v == null) return Math.max(body.scrollTop, html.scrollTop);
            else body.scrollTop = html.scrollTop = v;
        };
    }

    constructor(props){
        super(props)
    }
   _onClick (){
        alert(10)
    }
    render() {
        return (
            <div className="App">
                <div className="HomeTop">
                    <div className="HomeContent">
                        <ul className="list-inline">
                            <li className="list-inline-kuo">{"{"}</li>
                            <li><a href="http://jakewharton.com/blog">Blog</a></li>
                            <li><a href="http://jakewharton.com/presentations">Weibo</a></li>
                            <li><a href="https://github.com/JakeWharton">GitHub</a></li>
                            <li><a href="https://twitter.com/JakeWharton">Me</a></li>
                            <li className="list-inline-kuo">{"}"}</li>
                        </ul>
                    </div>
                    <div className="DownAllow" onClick={()=>{this._handleScroll(1)}}></div>
                </div>
                <footer className="HomeBottom"></footer>
            </div>
        );
    }
}
export default App;
