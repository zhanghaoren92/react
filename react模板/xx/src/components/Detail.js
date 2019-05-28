import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
// import querystring from 'query-string';
import {connect} from "react-redux";
import * as types from '../store/type';
import {asyncActionDetail} from '../store/asyncAction';


import "./Detail.css";

class Detail extends Component{
	componentDidMount(){
		let id=this.props.match.params.id;
		this.props.getDetail(id-1)
	}
	state={
		currentIndex:1
	}
	tabShow(oid){
		this.setState({
			currentIndex:oid
		})
	}

    render(){
		let isDivShow1 =this.state.currentIndex==1?"block":"none";
		let isDivShow2 =this.state.currentIndex==2?"block":"none";
		let isDivShow3 =this.state.currentIndex==3?"block":"none";

		let {detail}=this.props;		
        return(             
		<div className="warp clearfix">			
			<div className="header2 clearfloat box-s" id="header">
				<div className="left1 clearfloat fl">
				<p className="back" onClick={()=>{window.history.go(-1)}}></p>
				</div>
				<div className="middle clearfloat fl">
					商品详情
				</div>
				<div className="right1 fr clearfloat">
				<Link className="back" to="/personl"></Link>
				</div>
			</div>
			
			<div id="main" className="clearfloat">
				
				<div className="banenr1" id="banner_box">

                    <ReactSwipe className="carousel" swipeOptions={{
                        continuous: true,
                        speed:1000,
                        auto:1000,
			
				    }}>
                        <div><img className="dis_block" src={detail.src} alt=""/>	</div>
                        <div><img className="dis_block" src={detail.src2} alt=""/>	</div>
                        <div><img className="dis_block" src={detail.src} alt=""/>	</div>
                        <div><img className="dis_block" src={detail.src2} alt=""/>	</div>
				</ReactSwipe>			    	
			    	<ol>
			            <li>1/4</li>
			        </ol>				       
			    </div>
				
				<div className="pro-top clearfix box-s">
					<p className="tit">{detail.name}</p>
					<p className="price"><span>原价：¥500.00</span>&nbsp;¥{detail.price}</p>
				</div>
				<div className="pro-bottom clearfix box-s fl">
					<ul>
						<li>销量：100</li>
						<li className="shoucang">收藏</li>
						<li className="zixun">在线咨询</li>
					</ul>
				</div>
				<div className="pro-tab" >
					<div className="hd">
						<ul>
							<li className={this.state.currentIndex==1?"on":""} onClick={()=>{this.tabShow(1)}}>商品详情</li>
							<li className={this.state.currentIndex==2?"on":""} onClick={()=>{this.tabShow(2)}}>商品属性</li>
							<li className={this.state.currentIndex==3?"on":""}  onClick={()=>{this.tabShow(3)}}>评价</li>
						</ul>
					</div>
					<div className="bd clearfix box-s">
						<div className="lh" style={{"display":isDivShow1}}>自然堂孙怡同款凝时鲜颜肌活修护精华液80ml 小紫瓶</div>
						<div className="lh" style={{"display":isDivShow2}}>怡同款凝时鲜颜肌活修护精</div>
						<div className="lh" style={{"display":isDivShow3}}>1dasda</div>

						{/* <div className="lh">
						自然堂孙怡同款凝时鲜颜肌活修护精华液80ml 小紫瓶
						</div>
						<div className="lh">
						怡同款凝时鲜颜肌活修护精
						</div>
						<div className="lh">
								1dasda
                        </div> */}
                       
					</div>
				</div>
				
			</div>
			
			<div className="footer footer1 clearfloat box-s" id="footer">
				<ul>
					<li className="list">
						<Link to="/fuwu">
							<p className="icon31"></p>
							<p className="tit">在线服务</p>
						</Link>
					</li>
					<li className="list">
						<Link to="/shopcar">
							<p className="icon14"></p>
							<p className="tit">购物车</p>
						</Link>
					</li>
					<li className="btn">
						<input type="button"  value="加入购物车" className="gcar"
							onClick={
								()=>{
									this.props.goCar({
										"src":detail.src,
										"price":detail.price,
										"name":detail.name,
										"id":detail.id,
										"num":1
									})
								}
							}						
						/>
					</li>
					<li className="btn btn1">
						<input type="button"  value="立即购买" className="gcar gcar1" />
					</li>
				</ul>
			</div>
			
		</div>          
        )
	}
	


};
let MapStateToProps=(state)=>({
    detail:state.detail
});
let MapDispatchProps=(dispatch)=>({
    getDetail:(index)=>dispatch(asyncActionDetail(
		'http://localhost:3000/list',
		dispatch,
		types.UPDATE_DETAIL,
		index		
	)),
	goCar:(opt)=>{
		dispatch({
			type:types.ADD_ITEM,
			payload:opt
		})
	}
});//传参

export default connect(
    MapStateToProps,
    MapDispatchProps
)(Detail);
