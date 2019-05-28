import React,{Component} from 'react';
import './assets/css/hot.css';
import {connect} from 'react-redux'
import {stateList} from '../../store/actions/stateList'
import {UPDATE_PRODUCT, UPDATE_PRODUCT2} from '../../store/types'
//图片资源
import hots from './assets/img/hots.jpg';
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';

class Hot extends Component{
	constructor(props){
        super();  
        props.getList2();
     }
    render(){
		
        return (
            <React.Fragment>
				<header className="mui-bar mui-bar-nav aui-header b-line">
					<a onClick={()=>{this.props.history.go(-1)}} className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
					<h1 className="mui-title">热销单品</h1>
					<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
				</header>
				<div className="mui-content">
					<div className="aui-hots-img b-line"><img src={hots} alt=""/></div>
					<div className="devider b-line"></div>
					<div className="aui-img-clear" >
						<ul className="mui-table-view mui-table-view" id="OA_task_1">
							{
								this.props.list2&&this.props.list2.clothes_list.map((item)=>(
									<li key={item.c_id} className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
										<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" /></div>
										<div className="mui-slider-right mui-disabled">
											<a className="mui-btn mui-btn-red">删除</a>
										</div>
										<div className="mui-slider-handle mui-table">
											<a href="javascript:;">
												<img className="mui-media-object mui-pull-left" src={item.c_img}/>
												<div className="mui-media-body">
													¥{item.c_price_dazhe}
													<p className="mui-ellipsis">{item.c_name}</p>
													<p className="aui-sml">最热</p>
												</div>
											</a>
										</div>
									</li>
								))
							}
							
						</ul>
					</div>

					<div className="devider "></div>
					<div className="aui-list t-line">
						<h2>猜你喜欢</h2>
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

            </React.Fragment>
        )
    }
}
const initMapStateToProps=state=>({

    list2:state.list2
})
const initMapDispatchToProps=dispatch=>({
    getList2:()=>dispatch(stateList({
        url:'/app/hot_buy/',
        type:UPDATE_PRODUCT2
    }))

})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Hot)