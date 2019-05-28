import React,{Component} from 'react';

import './assets/css/category.css';
import Footer from '../../common/Footer/Footer.js';
import {Link} from 'react-router-dom'

//图片资源
import q1 from './assets/img/q1.png';
import q2 from './assets/img/q2.png';
import q3 from './assets/img/q3.png';
import q4 from './assets/img/q4.png';
import q5 from './assets/img/q5.png';
import q6 from './assets/img/q6.png';
import q7 from './assets/img/q7.png';
import q8 from './assets/img/q8.png';
import q9 from './assets/img/q9.png';
import q10 from './assets/img/q10.png';
import q11 from './assets/img/q11.png';
import q12 from './assets/img/q12.png';
import q13 from './assets/img/q13.png';
import q14 from './assets/img/q14.png';
import q15 from './assets/img/q15.png';
import q16 from './assets/img/q16.png';

import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';




 export default class Category extends Component{

    render(){
		// console.log(this.props.classify)
        return (
            <React.Fragment>
                <header className="mui-bar mui-bar-nav aui-header b-line">
                    <a className=" mui-icon mui-icon-search mui-pull-left"></a>
                    <h1 className="mui-title">分类</h1>
                    <a className=" mui-icon mui-icon-chatbubble mui-pull-right"></a>
                </header>
                <div className="mui-content">
	        <div className="aui-nav">
		        <h2 className="b-line">全部分类</h2>
		        <ul className="mui-table-view mui-grid-view mui-grid-9">
				
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
					<Link className='b-line' to='/Category/new/1?title=裙子'>
							<span className="aui-cell-img"><img src={q1} alt=""/></span>
                            <div className="mui-media-body">裙子</div>
					</Link>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
						<Link  to='/Category/new/2?title=上衣'>
                      
                            <span className="aui-cell-img"><img src={q2} alt=""/></span>
                            <div className="mui-media-body">上衣</div>
                        </Link>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q3} alt=""/></span>
                            <div className="mui-media-body">短袖</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q4} alt=""/></span>
                            <div className="mui-media-body">牛仔裤</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q5} alt=""/></span>
                            <div className="mui-media-body">针织衫</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q6} alt=""/></span>
                            <div className="mui-media-body">背带裤</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q7} alt=""/></span>
                            <div className="mui-media-body">运动裤</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q8} alt=""/></span>
                            <div className="mui-media-body">九分裤</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q9} alt=""/></span>
                            <div className="mui-media-body">风衣</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q10} alt=""/></span>
                            <div className="mui-media-body">西服</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q11} alt=""/></span>
                            <div className="mui-media-body">牛仔褂</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q12} alt=""/></span>
                            <div className="mui-media-body">卫衣</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q13} alt=""/></span>
                            <div className="mui-media-body">棒球服</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q14} alt=""/></span>
                            <div className="mui-media-body">衬衫</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q15} alt=""/></span>
                            <div className="mui-media-body">打底衫</div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-sm-3 b-line">
                        <a href="#">
                            <span className="aui-cell-img"><img src={q16} alt=""/></span>
                            <div className="mui-media-body">冲锋衣</div>
                        </a>
                    </li>
                </ul>
        </div>

	<div className="devider "></div>
	<div className="aui-list t-line">
		<h2>精品优选</h2>
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
                <div style={{height:"50px"}}></div>
                <Footer/>
            </React.Fragment>
        )
	}
	componentWillMount(){}
}


