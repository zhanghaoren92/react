import React,{Component} from 'react';
import './assets/css/content.css';
import Swiper1 from '../../common/Swiper/Swiper'
import List from '../../common/List/List'
//前景图片资源引入；

import icon1 from './assets/img/icon/icon-1.png';
import icon2 from './assets/img/icon/icon-2.png';
import icon3 from './assets/img/icon/icon-3.png';
import icon4 from './assets/img/icon/icon-4.png';

import hot from './assets/img/hot.jpg';

import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';

import bd1 from './assets/img/bd1.jpg';
import bd2 from './assets/img/bd2.jpg';
import bd3 from './assets/img/bd3.jpg';
import bd4 from './assets/img/bd4.jpg';
import bd5 from './assets/img/bd5.jpg';
import bd6 from './assets/img/bd6.jpg';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {stateList} from '../../store/actions/stateList'
import {UPDATE_PRODUCT, UPDATE_PRODUCT2} from '../../store/types'
import Header from '../../common/Header/Header';

 class Content extends Component{
    constructor(props){
        super();

        props.getList();
        props.getList2();
     }
    render(){
        let {list,list2}=this.props;
        return (
                <>
                    <Header/>
               
                <div className="mui-content">
                      <Swiper1 />
                        <div className="aui-nav">
                            <ul className="mui-table-view mui-grid-view mui-grid-9">
                                <li className="mui-table-view-cell mui-media mui-col-sm-3 ">
                                    <Link to='/hot'>
                                        <span className="aui-cell-img"><img src={icon1} alt=""/></span>
                                        <div className="mui-media-body">热销单品</div>
                                    </Link>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-sm-3 ">
                                    <Link to='/new'>
                                        <span className="aui-cell-img"><img src={icon2} alt=""/></span>
                                        <div className="mui-media-body">今日上新</div>
                                    </Link>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-sm-3 ">
                                    <Link to='/suit'>
                                        <span className="aui-cell-img"><img src={icon3} alt=""/></span>
                                        <div className="mui-media-body">优惠套装</div>
                                    </Link>
                                    
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-sm-3 ">
                                    <Link to='kill'>
                                        <span className="aui-cell-img"><img src={icon4} alt=""/></span>
                                        <div className="mui-media-body">秒杀专场</div>
                                    </Link>
                                   
                                </li>
                            </ul>
	                    </div>
                        <div className="devider t-line"></div>
                        <div className="aui-hot t-line">
                            <h2>牛仔蓝不单调不低调</h2>
                            <div>
                                <Link to='/news'>
                                    <img src={hot} alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="devider t-line"></div>
                        <div className="aui-list t-line">
                            <h2>精品优选</h2>
                           <List list={list}/>
                        </div>
                        {/* <!-- ----- 春季百搭列表 begin  --- --> */}
                        <div className="mui-slider aui-slider">
                            <div className="devider t-line"></div>
                            <div className="t-line"></div>
                            <h2>春季百搭</h2>
                            <div className="mui-slider-group mui-slider-loop">
                                {/* <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) --> */}
                                <div className="mui-slider-item mui-slider-item-duplicate">
                                    <ul className="mui-table-view mui-grid-view">
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd1}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd2}/>
                                                <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mui-slider-item">
                                    <ul className="mui-table-view mui-grid-view">
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd1}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd2}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mui-slider-item">
                                    <ul className="mui-table-view mui-grid-view">
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd3}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd4}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mui-slider-item">
                                    <ul className="mui-table-view mui-grid-view">
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd5}/>
                                                <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd6}/>
                                                <div className="mui-media-body">32017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) --> */}
                                <div className="mui-slider-item mui-slider-item-duplicate">
                                    <ul className="mui-table-view mui-grid-view">
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd5}/>
                                                <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                        <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                            <a href="page.html"><img className="mui-media-object" src={bd6}/>
                                                <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                                <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="mui-slider-indicator" style={{position:"static",backgroundColor:"#fff"}}>
                                <div className="mui-number" style={{color:"#999"}}>
                                    <span>1</span>/3
                                </div>
                            </div>
                        </div>
                        {/* <!-- ----- 春季百搭列表 End  --- --> */}
                        <div className="devider t-line"></div>
                        <div className="aui-list t-line">
                            <h2>精品优选</h2>
                            <ul className="mui-table-view mui-grid-view">
                            <List list={list2}/>
                            </ul>
                        </div>
                        <div style={{height:"50px"}}></div>
                </div>
                </>
        )
    }

    
}
const initMapStateToProps=state=>({
    list:state.list,
    list2:state.list2
})
const initMapDispatchToProps=dispatch=>({
    getList:()=>dispatch(stateList({
        url:'/app/home/',
        type:UPDATE_PRODUCT
    })),
    getList2:()=>dispatch(stateList({
        url:'/app/hot_buy/',
        type:UPDATE_PRODUCT2
    }))

})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Content)