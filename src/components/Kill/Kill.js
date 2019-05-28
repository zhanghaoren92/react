import React,{Component} from 'react';
import './assets/css/kill.css';

//图片资源引入;
import miao from './assets/img/miao.jpg';

export default class Kill extends Component{
    render(){
        return (
            <React.Fragment>
<header className="mui-bar mui-bar-nav aui-header b-line">
	<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
	<h1 className="mui-title">秒杀专场</h1>
	<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
</header>
<div className="mui-content">
	<div className="aui-kill">
		<img src={miao} alt=""/>
	</div>
</div>
            </React.Fragment>
        )
    }
}