import React,{Component} from 'react';
import './assets/css/news.css';

//图片资源引入
import hot from './assets/img/hot.jpg';
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import hots from './assets/img/hots.jpg';

import banner from './assets/img/banner.jpg';
import banner1 from './assets/img/banner1.jpg';




export default class News extends Component{
    render(){
        return (
            <React.Fragment>
<header className="mui-bar mui-bar-nav aui-header b-line">
	<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
	<h1 className="mui-title">牛仔蓝不单调不低调</h1>
	<a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
</header>


<div className="mui-content">

	<div className="aui-kill">
		<img src={hot} alt=""/>
	</div>

	<div className="mui-card">
		<div className="mui-card-header">高腰裤</div>
		<div className="mui-card-content">
			<div className="mui-card-content-inner">
				高腰裤，这个起源于上世纪六七十年代的流行单品，现在看来一定是一个伟大的设计，它可以很好地提升腰节线，拉长身材比例，同时勾勒出修长的双腿，A4腰和筷子腿统统都可以交给它。
			</div>
		</div>
		<div className="mui-card-footer">流行单品</div>
	</div>

	<div className="mui-card">
		<img src={banner1} style={{height:"40vw"}} className='mui-card-header mui-card-media'/>
		<div className="mui-card-content">
			<div className="mui-card-content-inner">
				<p>Posted on January 18, 2016</p>
				<p style={{color: "#333"}}> 	高腰裤，这个起源于上世纪六七十年代的流行单品，现在看来一定是一个伟大的设计，它可以很好地提升腰节线，拉长身材比例，同时勾勒出修长的双腿，A4腰和筷子腿统统都可以交给它。 	</p>
			</div>
		</div>
		<div className="mui-card-footer mui-pull-right">
			<a className="mui-card-link">精选</a>
		</div>
	</div>


	<div className="mui-card">
		<div className="mui-card-header mui-card-media">
			<div className="mui-card-media-object mui-pull-left">
				<img src={ad1} style={{width:"34px",height:"34px"}} />
			</div>
			<div className="mui-media-body">
				张宇佳哥哥 
				<hr/>
				<i>服装架质量不错，结实耐用，承重力好，大小高度刚好，很满意！</i>
				<p>发表于 2016-06-30 15:30</p>
			</div>
		</div>
		
		<img src={banner} style={{height:"40vw"}} className='mui-card-content mui-card-media'/>
		<div className="mui-card-footer mui-pull-right">
			<a className="mui-card-link">精选</a>
		</div>
	</div>

	<div className="mui-card">
		<div className="mui-card-header mui-card-media">
			<img src={ad2}/>
			<div className="mui-media-body">
				徐萌小小
				<hr/>
				<i>服装架质量不错，结实耐用，承重力好，大小高度刚好，很满意！</i>
				<p>发表于 2016-06-30 15:30</p>
			</div>
		</div>
		<div className="mui-card-content">
			<img src={hots} alt="" style={{width:"100%"}}/>
		</div>
		<div className="mui-card-footer mui-pull-right">
			<a className="mui-card-link">精选</a>
		</div>
	</div>
</div>
            </React.Fragment>
        )
    }
}