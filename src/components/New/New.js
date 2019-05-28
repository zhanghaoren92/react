import React,{Component} from 'react';
import './assets/css/new.css';
import $ from 'jquery'
import Header1 from '../../common/Header1/Header1'
//图片资源
import List from '../../common/List/List'
import {connect} from 'react-redux'
import queryString from 'query-string'
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';
import {UPDATE_CLASSIFY,VIEW_FOOT} from '../../store/types'
import {stateClassify} from '../../store/actions/stateClassify'
 class New extends Component{
	constructor(props){
		super();
		// props.setFoot();
		// console.log(props.match.params.id)	
		props.getCategory(props.match.params.id)
		this.title=queryString.parse(props.location.search).title
	}
    render(){
	
		let {classify,...aaa}=this.props
		// console.log({...aaa})
        return(
            <React.Fragment>
				<Header1 title={this.title} {...aaa} />
				<div className="mui-content">

					<div className="">
						
						<div id='classDetail'>
							<div id="item1" className="mui-control-content mui-active" style={{height:"1200px"}}>
								<ul className="mui-table-view mui-grid-view">
									<List list={classify} />
								</ul>
							</div>
							<div id="item2" className="mui-control-content">
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
							<div id="item3" className="mui-control-content">
								<ul className="mui-table-view mui-grid-view">
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad4}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad3}/>
											<div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
											<div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad2}/>
											<div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
											<div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
										</a>
									</li>
									<li className="mui-table-view-cell mui-media mui-col-xs-6">
										<a href="#">
											<img className="mui-media-object" src={ad1}/>
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
		// $('#segmentedControl').children('a').on('click',function(){
		// 	$(this).siblings('a').attr('class','mui-control-item')
		// 	$('#classDetail').children('div').attr('class','mui-control-content')
		// 	$('#classDetail').children('div').eq($(this).index()).addClass('mui-active')
			
		// 	$(this).addClass('mui-active')
		// })
    }
   
}

const initMapStateToProps=state=>({
	classify:state.classify,
	bLoading:state.bLoading
})
const initMapDispatchToProps=dispatch=>({
    getCategory:(id)=>dispatch(stateClassify({
        url:'/app/classify/',
		type:UPDATE_CLASSIFY,
		id:id
    })),
	setFoot:()=>dispatch({type:VIEW_FOOT,payload:true}),

})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(New)