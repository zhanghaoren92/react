import React,{Component} from 'react';
import './assets/css/suit.css';
import $ from 'jquery'
//图片资源
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';

import qz1 from './assets/img/qz-1.jpg';
import qz2 from './assets/img/qz-2.jpg';
import qz3 from './assets/img/qz-3.jpg';
import qz4 from './assets/img/qz-4.jpg';
import {connect} from 'react-redux'
import {stateSuit} from '../../store/actions/stateSuit'
import {UPDATE_SUIT,VIEW_FOOT} from '../../store/types'
import List from '../../common/List/List'
class Suit extends Component{
	constructor(props){
		super();
	
		props.getSuit()
		
	}
    render(){
		console.log(this.props.suit)
		let {suit}=this.props
        return (
            <React.Fragment>
				<header className="mui-bar mui-bar-nav aui-header b-line">
					<a  onClick={()=>{this.props.history.go(-1)}} className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
					<h1 className="mui-title">优惠套装</h1>
					<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
				</header>
				<div className="mui-content">
					<List list={suit} />
					<div className="">
						<div style={{padding:"0 10px", marginTop:"10px"}} className="">
							<div id="segmentedControl" className="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
								<a className="mui-control-item mui-active" >亲子套装</a>
								<a className="mui-control-item" >秋季套装</a>
								<a className="mui-control-item" >省心套装</a>
								<a className="mui-control-item" >搭配套装</a>
							</div>
						</div>
						<div id='classDetail'>
							<div id="item1" className="mui-control-content mui-active" style={{height:"1200px"}}>
								<ul className="mui-table-view mui-grid-view">
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
								</ul>
							</div>
							<div id="item2" className="mui-control-content">
								<ul className="mui-table-view mui-grid-view">
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
								</ul>
							</div>
							<div id="item3" className="mui-control-content">
								<ul className="mui-table-view mui-grid-view">
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
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
	suit:state.suit,
	bFoot:state.bFoot
  });
    
  const initMapDispatchToProps=dispatch=>({
	getSuit:()=>dispatch(stateSuit({
	  url:`/app/discount_suit/`,
	  type:UPDATE_SUIT,
	})),
	
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Suit)
