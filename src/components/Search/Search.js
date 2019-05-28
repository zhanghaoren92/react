import React,{Component} from 'react';
import './assets/css/search.css';

export default class Search extends Component{
    render(){
        return (
            <React.Fragment>
    <div className="mui-content" style={{padding:"15px"}}>
		<div className="mui-input-row mui-search">
			<input type="search" className="mui-input-clear" placeholder=""/>
			<a  className="mui-action-back mui-icon  mui-pull-right" style={{position:"absolute", right:"10px", zIndex:9999, fontSize:"14px", color:"#999", top:"12px"}}>取消</a>
		</div>
	<div className="mui-content-padded">
		<h5>热门搜索</h5>
		<span className="mui-badge">牛仔裤</span>
		<span className="mui-badge mui-badge-primary">上衣</span>
		<span className="mui-badge mui-badge-success">裙子</span>
		<span className="mui-badge mui-badge-warning">亲子套装</span>
		<span className="mui-badge mui-badge-danger">省心套组</span>
		<span className="mui-badge mui-badge-purple">针织衫</span>
		<span className="mui-badge">牛仔裤</span>
		<span className="mui-badge mui-badge-primary">亲子套装</span>
		<span className="mui-badge mui-badge-success">最新上架</span>
		<span className="mui-badge mui-badge-warning">亲子套装</span>
		<span className="mui-badge mui-badge-danger">省心套组</span>
		<span className="mui-badge mui-badge-purple">针织衫</span>
		<span className="mui-badge mui-badge-purple">针织衫</span>
		<span className="mui-badge mui-badge-purple">针织衫</span>
		<span className="mui-badge mui-badge-purple">针织衫</span>
	</div>

</div>
            </React.Fragment>
        )
    }
}