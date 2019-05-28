import React,{Component} from 'react';
import './assets/css/page.css';
import $ from 'jquery'
//图片资源
import page from './assets/img/page.jpg';
import page1 from './assets/img/page1.jpg';
import {stateAdd} from '../../store/actions/stateAdd'
import bd1 from './assets/img/bd1.jpg';
import bd2 from './assets/img/bd2.jpg';
import bd3 from './assets/img/bd3.jpg';
import bd4 from './assets/img/bd4.jpg';
import bd5 from './assets/img/bd5.jpg';
import bd6 from './assets/img/bd6.jpg';
import querystring from 'query-string';
import {connect} from 'react-redux'
import {statePage} from '../../store/actions/statePage'
import {UPDATE_PAGE,CLEAR_DETAIL,VIEW_FOOT,UPDATE_ADD} from '../../store/types'
import Swiper1 from '../../common/Swiper/Swiper';
import {Prompt,Link} from 'react-router-dom'
 class Page extends Component{
	constructor(props){
		super();
	
		props.getPage(props.match.params.id)
	}
	render(){
		this.aaa={...this.props.page.clothe}
			
        return (
            <React.Fragment>
				<header id="header" className="mui-bar mui-bar-transparent">
					<a onClick={()=>{this.props.history.go(-1)}} className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"  style={{color:"#666"}}></a>
					<h1 className="mui-title"></h1>
					<a className="mui-icon mui-icon-paperplane mui-pull-right" style={{color:"#666"}}></a>
				</header>

				<div className="mui-content" style={{background:"#fff"}}>
					<Swiper1 img={this.aaa.c_img} />
					<div className="aui-title-h b-line">
						<h3>{this.aaa.c_name}  </h3>
						<p>修身九分西装裤小脚高腰休闲西裤女装anna家32176</p>
						<em>${this.aaa.c_price}</em>
						<i>价格 {this.aaa.c_pirce_zhe}</i>
						<div className="aui-title-sp "><span className="mui-icon-extra mui-icon-extra-heart">销量 {this.aaa.c_buy_num}</span>  <span className="mui-icon-extra mui-icon-extra-heart">收藏475人</span>  <span className="mui-icon-extra mui-icon-extra-heart">顺丰快递</span>  </div>
					</div>
					<div className="devider b-line"></div>
					<div className="">
						<div style={{padding:"0 10px", marginTop:"10px"}} className="">
							<div id="segmentedControl" className="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
								<a className="mui-control-item mui-active" >商品详情</a>
								<a className="mui-control-item">规格尺码</a>
								<a className="mui-control-item" >商品评价</a>

							</div>
						</div>
						<div id='classDetail'>
							<div id="item1" className="mui-control-content mui-active" style={{height:"1200px"}}>
								<div className="aui-p">
									<p>{this.aaa.c_describe}</p>
								</div>
								<div className="aui-kill aui-op"><img src={bd1} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd2} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd3} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd4} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd5} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd6} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd1} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd2} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd3} alt=""/></div>
								<div className="aui-kill aui-op"><img src={bd4} alt=""/></div>
							</div>

							<div id="item2" className="mui-control-content">
								<ul className="mui-table-view ">
									<li className="mui-table-view-cell b-line">尺码: 均码</li>
									<li className="mui-table-view-cell b-line">腰围： 68 紧身</li>
									<li className="mui-table-view-cell b-line">裤长：37</li>
									<li className="mui-table-view-cell b-line">衣长：59</li>
									<li className="mui-table-view-cell b-line">胸围：109</li>
									<li className="mui-table-view-cell b-line">裤口：32</li>
									<li className="mui-table-view-cell b-line">袖长：38</li>
									<li className="mui-table-view-cell b-line">颜色：黑色/白色/黄色</li>
									<li className="mui-table-view-cell b-line">风格：基本款</li>
									<li className="mui-table-view-cell b-line">季节：春季</li>
									<li className="mui-table-view-cell b-line">领型：连衣</li>
								</ul>

							</div>
							<div id="item3" className="mui-control-content">
								评价
							</div>
						</div>
					</div>
					<div style={{height:"900px"}}></div>
				</div>



				<div style={{height:"50px"}}></div>
				<nav className="mui-bar mui-bar-tab">
					<div className="t-line aui-on-cell">
						<div className="aui-ons">
							<a href="#"><span className="mui-icon-extra mui-icon-extra-addpeople"></span><i>客服</i></a>
							<a href="#"><span className="mui-icon-extra mui-icon-extra-university"></span><i>店铺</i></a>
							<a href="#"><span className="mui-icon-extra mui-icon-extra-heart-filled"></span><i>收藏</i></a>
						</div>
						<div className="aui-onc">
							<a onClick={()=>{this.props.getAdd(this.aaa.c_id);}} style={{marginRight:"-4px"}}>加入购物车</a>
							<Link onClick={()=>{this.props.getAdd(this.aaa.c_id);}} className="aui-got" to='/car'>立即购买</Link>
						
						</div>
					</div>



				</nav>
				<Prompt
					when={true}
					message={()=>{this.props.clearDetail();this.props.setFoot()}}
				/>
            </React.Fragment>
        )
    }

    componentDidMount(){
		$('#segmentedControl').children('a').on('click',function(){
			$(this).siblings('a').attr('class','mui-control-item')
			$('#classDetail').children('div').attr('class','mui-control-content')
			$('#classDetail').children('div').eq($(this).index()).addClass('mui-active')
			
			$(this).addClass('mui-active')
		})
    }
}
const initMapStateToProps=state=>({
	page:state.page,
	bFoot:state.bFoot
  });
    
  const initMapDispatchToProps=dispatch=>({
	getPage:(id)=>dispatch(statePage({
	  url:`/app/clothes_details/`,
	  type:UPDATE_PAGE,
	  id:id
	})),
	getAdd:(id)=>dispatch(stateAdd({
        url:`/app/add_clothes_cart/`,
        type:UPDATE_ADD,
				id:id,
      })),
	clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
	setFoot:()=>dispatch({type:VIEW_FOOT,payload:true}),
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Page)

