import React,{Component} from 'react';
import './assets/css/dope.css';

//图片资源
import tz1 from './assets/img/tz-1.png';
import tz2 from './assets/img/tz-2.png';
import tz3 from './assets/img/tz-3.png';

export default class Dope extends Component{
    render(){
        return (
            <React.Fragment>
<header className="mui-bar mui-bar-nav aui-header b-line">
	<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
	<h1 className="mui-title">消息通知</h1>
	<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
</header>
<div className="mui-content">
	<div className="aui-list-cells">
		<a href="javascript:;" className="aui-list-cell aui-list-cell-s">
			<div className="aui-list-cell-fl"><img src={tz1}/></div>
			<div className="aui-list-cell-cn">通知消息</div>
			<div className="aui-list-cell-fr"></div>
		</a>
		<a href="javascript:;" className="aui-list-cell aui-list-cell-s">
			<div className="aui-list-cell-fl"><img src={tz2}/></div>
			<div className="aui-list-cell-cn">互动消息</div>
			<div className="aui-list-cell-fr"></div>
		</a>
		<a href="javascript:;" className="aui-list-cell aui-list-cell-s">
			<div className="aui-list-cell-fl"><img src={tz3}/></div>
			<div className="aui-list-cell-cn">交易消息</div>
			<div className="aui-list-cell-fr"></div>
		</a>
	</div>
</div>
            </React.Fragment>
        )
    }
}