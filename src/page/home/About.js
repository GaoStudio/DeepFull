/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import './Article.css';
class About extends Component {
    getTooltipDataAttrs = (value) => {
        // Temporary hack around null value.date issue
        if (!value || !value.date) {
            return null;
        }
        // Configuration for react-tooltip
        return {
            'data-tip': `${value.date} Get up at ${value.time}`,
        };
    };
    render(){
        return(
            <div>
                <div className="article">
                    <div className="articleTitle">
                        <div className="articleName">About Me</div>
                        <div className="articleDetailLine"></div>
                    </div>
                    <div className="articleContent" style={{marginLeft:20, fontSize:18}}>
                        <div style={{marginBottom:20}}>
                            <span  style={{marginRight:10,color:'#333',fontWeight:'bold'}}>Email:</span><span><a style={{color:'#666'}} href="mailto:gaoweivf@aliyun.com">gaoweivf@aliyun.com</a></span>
                        </div>
                        <div style={{marginBottom:20}}>
                            <span style={{marginRight:10,color:'#333',fontWeight:'bold'}}>GitHub:</span><span><a style={{color:'#666'}} target="_blank" href="https://github.com/GaoStudio">@GaoStudio</a></span>
                        </div>
                        <div style={{marginBottom:20}}>
                            <span style={{marginRight:10,color:'#333',fontWeight:'bold'}}>Weibo:</span><span><a style={{color:'#666'}} target="_blank" href="https://weibo.com/u/3032597695">@TA来自陈国</a></span>
                        </div>
                    </div>
                </div>
                <div className="article">
                    <div className="articleTitle">
                        <div className="articleName">Good Morning</div>
                        <div className="articleDetailLine"></div>
                    </div>
                    <div className="articleContent" style={{marginLeft:0,marginRight:20,paddingBottom:0, fontSize:18}}>
                        <CalendarHeatmap
                            startDate={new Date('2017-12-31')}
                            endDate={new Date('2018-11-11')}
                            values={[]}
                            showWeekdayLabels={true}
                            tooltipDataAttrs={this.getTooltipDataAttrs}
                            gutterSize={1}
                            weekdayLabels={['壹','贰','叁','肆','伍','陆','柒']}
                            classForValue={(value) => {
                                if (!value) {
                                    return 'color-empty';
                                }
                                return `color-scale-${value.count}`;
                            }}
                        />
                    </div>
                </div>
                <ReactTooltip />
            </div>
        )
    }
}
export default About;