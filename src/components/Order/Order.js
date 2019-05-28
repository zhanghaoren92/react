import React,{Component} from 'react';
import './assets/css/order.css';

//图片资源
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';


export default class Order extends Component{
    render(){
        return(
            <React.Fragment>
<header className="mui-bar mui-bar-nav aui-header b-line">
	<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
	<h1 className="mui-title">确认订单</h1>
	<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
</header>
<div className="mui-content">
	<ul className="mui-table-view mui-table-view-radio t-line">
		<li className="mui-table-view-cell b-line">
			<p>徐萌 18801066666</p>
			<p>北京市海淀区双榆树东里4号楼3门303</p>
		</li>
		<li className="mui-table-view-cell b-line">
			<p><a href="#address" style={{paddingRight:"20px"}}><span className="mui-icon mui-icon-compose"></span>编辑</a> <a href="#"><span className="mui-icon mui-icon-trash"></span>删除</a></p>
		</li>
	</ul>
	<div className="devider"></div>
	<ul className="mui-table-view mui-table-view t-line" id="OA_task_1">
		<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
			<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"/></div>
			<div className="mui-slider-right mui-disabled">
				<a className="mui-btn mui-btn-red">删除</a>
			</div>
			<div className="mui-slider-handle mui-table">
				<a href="javascript:;">
					<img className="mui-media-object aui-ma-d mui-pull-left" src={ad1}/>
					<div className="mui-media-body">¥112.50
						<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
						<p>数量：2</p>
						<p>颜色：黄色</p>
					</div>
				</a>
			</div>
		</li>
		<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
			<div className="mui-slider-right mui-disabled">
				<a className="mui-btn mui-btn-red">删除</a>
			</div>
			<div className="mui-slider-handle mui-table">
				<a href="javascript:;">
					<img className="mui-media-object aui-ma-d mui-pull-left" src={ad2}/>
					<div className="mui-media-body">¥112.50
						<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
						<p>数量：2</p>
						<p>颜色：黄色</p>
					</div>
				</a>
			</div>
		</li>
	</ul>
	<div className="devider b-line"></div>
	<ul className="mui-table-view ">
		<li className="mui-table-view-cell b-line">配送方式: <span className="mui-pull-right">全国包邮</span></li>
		<li className="mui-table-view-cell b-line">快递费用: <span className="mui-pull-right">¥00.00</span></li>
		<li className="mui-table-view-cell b-line">合计: <span className="mui-pull-right">¥112.50</span></li>
	</ul>
	<div className="mui-input-row" style={{margin:"15px"}}>
		<textarea id="textarea" rows="5" placeholder="留言..." style={{border:"none"}}></textarea>
	</div>


</div>

<div style={{height:"49px"}}></div>
<nav className="mui-bar mui-bar-tab" >
	<div className="t-line aui-on-cell">

		<div className="aui-onc">
			<p style={{display:"inline-block"}}><span style={{color:"#fb4545"}}>总计：¥112.50 </span></p>
			<a href="alipay.html" className="aui-got" style={{padding:"0 40px"}}>提交订单</a>
		</div>
	</div>
</nav>
            </React.Fragment>
        )
    }
}