import React,{Component} from 'react';
import './assets/css/me.css';
import Footer from '../../common/Footer/Footer.js';

//图片资源
import ad1 from './assets/img/ad1.jpg';


export default class Me extends Component{
	render(){
		return (
<div className="mui-fullscreen">
		{/* <!--页面主结构开始--> */}
<div id="app123" className="mui-views">
	<div className="mui-view">
		<div className="mui-navbar">
		</div>
		<div className="mui-pages">
		</div>
	</div>
</div>
{/* <!--页面主结构结束--> */}
{/* <!--单页面开始--> */}
<div id="setting" className="mui-page">
	{/* <!--页面标题栏开始--> */}
	<div className="mui-navbar-inner mui-bar mui-bar-nav b-line">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
		</button>
		<h1 className="mui-center mui-title">个人中心</h1>
	</div>
	{/* <!--页面标题栏结束--> */}
	{/* <!--页面主内容区开始--> */}
	<div className="mui-page-content ">
		<div className="mui-scroll-wrapper ">
			<div className="mui-scroll ">
				<ul className="mui-table-view mui-table-view-chevron">
					<li className="mui-table-view-cell mui-media b-line">
						<a className="mui-navigate-right t-line" href="#account">
							<img className="mui-media-object mui-pull-left head-img" id="" src={ad1}/>
							<div className="mui-media-body">
								莎啦啦
								<p className='mui-ellipsis'>时尚女王</p>
							</div>
						</a>
					</li>
				</ul>
				<ul className="mui-table-view mui-table-view-chevron t-line">
					<li className="mui-table-view-cell b-line">
						<a href="#account1" className="mui-navigate-right">我的订单</a>
					</li>
				</ul>
				<ul className="mui-table-view mui-table-view-chevron t-line">
					<li className="mui-table-view-cell b-line">
						<a href="#privacy" className="mui-navigate-right">收货地址</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a href="#notifications" className="mui-navigate-right">消息通知</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a href="#general" className="mui-navigate-right">我的收藏</a>
					</li>
				</ul>
				<ul className="mui-table-view mui-table-view-chevron b-line">
					<li className="mui-table-view-cell t-line">
						<a href="#about" className="mui-navigate-right">关于海淘购 <i className="mui-pull-right update">2.0</i></a>
					</li>
				</ul>
				<ul className="mui-table-view b-line">
					<li className=" t-line" style={{textAlign: "center",padding:"14px 0"}}>
						<div style={{color:"#ff3366",display:"inline-block",width:"100%"}} onClick={this.logout}>注销</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
</div>

<div id="account" className="mui-page ">
	<div className="mui-navbar-inner mui-bar mui-bar-nav ">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">个人信息</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view">
					<li className="mui-table-view-cell t-line ">
						<a id="head" className="mui-navigate-right">头像
							<span className="mui-pull-right head">
									<img className="head-img mui-action-preview" id="head-img1" />
								</span>
						</a>
					</li>
					<li className="mui-table-view-cell t-line">
						<a>姓名<span className="mui-pull-right">艾薇儿</span></a>
					</li>
					<div className="b-line"></div>
				</ul>
				<ul className="mui-table-view t-line">
					<li className="mui-table-view-cell b-line">
						<a>QQ号<span className="mui-pull-right">88888888</span></a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a>手机<span className="mui-pull-right">885444444</span></a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a>邮箱地址<span className="mui-pull-right">haitao@me.com</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div id="account1" className="mui-page ">
	<div className="mui-navbar-inner mui-bar mui-bar-nav ">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">我的订单</h1>
	</div>
	<div className="">
		<div className="">
			<div className="">
				<div className="">
					<div style={{padding:"5px 10px"}} className="b-line">
						<div id="segmentedControl" className="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
							<a className="mui-control-item mui-active" href="#item1">全部</a>
							<a className="mui-control-item" href="#item2">代付款</a>
							<a className="mui-control-item" href="#item3">待收货</a>
							<a className="mui-control-item" href="#item3">待评价</a>
							<a className="mui-control-item" href="#item3">退款退货</a>
						</div>
					</div>
					<div>
						<div id="item1" className="mui-control-content mui-active" style={{height:"800px"}}>
							<div className="mui-page-content">
								<div className="mui-scroll-wrapper" data-scroll="8">
									<div className="mui-scroll" style={{transform: "translate3d(0px, 0px, 0px) translateZ(0px)", transitionDuration:" 0ms"}}>
										<ul className="mui-table-view mui-table-view t-line" id="" style={{marginTop:0}}>
											<li className="mui-table-view-cell mui-table-view-cell mui-media b-line mui-transitioning">
												<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"/></div>
												<div className="mui-slider-right mui-disabled">
													<a className="mui-btn mui-btn-red" style={{transform: "translate(0px, 0px)"}}>删除</a>
												</div>
												<div className="mui-slider-handle mui-table" style={{transform: "translate(0px, 0px)"}}>
													<a href="javascript:;">
														<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
														</div>
													</a>
												</div>
											</li>
											<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
												<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"/></div>
												<div className="mui-slider-right mui-disabled">
													<a className="mui-btn mui-btn-red">删除</a>
												</div>
												<div className="mui-slider-handle mui-table">
													<a href="javascript:;">
														<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
														</div>
													</a>
												</div>
											</li>
											<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
												<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"/></div>
												<div className="mui-slider-right mui-disabled">
													<a className="mui-btn mui-btn-red">删除</a>
												</div>
												<div className="mui-slider-handle mui-table">
													<a href="javascript:;">
														<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
														<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
														<div className="mui-media-body">¥112.50
															<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
														</div>
													</a>
												</div>
											</li>
										</ul>
									</div>
									<div className="mui-scrollbar mui-scrollbar-vertical"><div className="mui-scrollbar-indicator" style={{transitionDuration: "0ms",display: "none", height: "686px", transform: "translate3d(0px, 0px, 0px) translateZ(0px)"}}></div></div></div>
							</div>
						</div>
						<div id="item2" className="mui-control-content">
							<ul className="mui-table-view" style={{marginTop:0}}>
								<li className="mui-table-view-cell">
									代付款
								</li>

							</ul>
						</div>
						<div id="item3" className="mui-control-content">
							<ul className="mui-table-view" style={{marginTop:0}}>
								<li className="mui-table-view-cell" >
									待收货
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="notifications" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">消息通知</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view t-line">
					<li className="mui-table-view-cell b-line">
						<a>接收新消息通知<span className="mui-pull-right">已开启</span></a>
					</li>
				</ul>
				<ul className="mui-table-view t-line">
					<li className="mui-table-view-cell b-line">
						关系消息通知
						<div className="mui-switch mui-active mui-switch-mini">
							<div className="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
				<div className="mui-content-padded">
					<p>若关闭，当收到新消息时，通知提示将不显示发信人和内容摘要</p>
				</div>

				<ul className="mui-table-view mui-table-view-chevron t-line">
					<li className="mui-table-view-cell b-line">
						<a href="#notifications_disturb" className="mui-navigate-right">消息免打扰</a>
					</li>
				</ul>
				<div></div>
			</div>
		</div>
	</div>
</div>
<div id="notifications_disturb" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav b-line">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">消息免打扰</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view mui-table-view-radio t-line">
					<li className="mui-table-view-cell b-line">
						<a className="mui-navigate-right">开启</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a className="mui-navigate-right">只在夜间开启</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a className="mui-navigate-right">关闭</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div id="privacy" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">管理收货地址</h1>
		<a href="#address" type="button" className="mui-left  mui-btn  mui-btn-link mui-btn-nav mui-pull-right">
			<span className="mui-icon mui-icon-plus"></span>
		</a>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view mui-table-view-radio t-line">
					<li className="mui-table-view-cell b-line">
						<p>徐萌 18801066666</p>
						<p>北京市海淀区双榆树东里4号楼3门303</p>
					</li>
					<li className="mui-table-view-cell b-line">
						<p><a  href="#address" style={{paddingRight:"20px"}}><span className="mui-icon mui-icon-compose"></span>编辑</a> <a href="#"><span className="mui-icon mui-icon-trash"></span>删除</a></p>
					</li>
				</ul>
				<ul className="mui-table-view mui-table-view-radio t-line">
					<li className="mui-table-view-cell b-line">
						<p>徐萌 18801066666</p>
						<p>北京市海淀区双榆树东里4号楼3门303</p>
					</li>
					<li className="mui-table-view-cell b-line">
						<p><a href="#address" style={{paddingRight:"20px"}}><span className="mui-icon mui-icon-compose"></span>编辑</a> <a href="#"><span className="mui-icon mui-icon-trash"></span>删除</a></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div id="address" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">新增收货地址</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">

					<form className="mui-input-group">
						<div className="mui-input-row b-line">
							<label>收货人：</label>
							<input type="text" placeholder="徐萌"/>
						</div>
						<div className="mui-input-row b-line">
							<label>手机号：</label>
							<input type="text" className="mui-input-clear" placeholder="1880108888888" data-input-clear="3"/><span className="mui-icon mui-icon-clear mui-hidden"></span>
						</div>
						<div className="mui-input-row b-line">
							<label>省市区：</label>
							<input type="text" className="mui-input-speech mui-input-clear" placeholder="北京市海淀区" data-input-clear="4" data-input-speech="4"/><span className="mui-icon mui-icon-clear mui-hidden"></span><span className="mui-icon mui-icon-speech"></span>
						</div>
						<div className="mui-input-row b-line">
							<label>详细地址：</label>
							<input type="text" className="mui-input-clear" placeholder="中关村大街23号" data-input-clear="3"/><span className="mui-icon mui-icon-clear mui-hidden"></span>
						</div>
						<div className="mui-button-row b-line" style={{padding:"15px 0",height:"auto"}}>
							<button className="mui-btn mui-btn-primary" type="button" onClick={()=>{return false}}>确认</button>&nbsp;&nbsp;
							<button className="mui-btn mui-btn-primary" type="button" onClick={()=>{return false}}>取消</button>
						</div>
					</form>

			</div>
		</div>
	</div>
</div>
<div id="general" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<h1 className="mui-center mui-title">我的收藏</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view mui-table-view t-line" id="OA_task_1">
					<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
						<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" /></div>
						<div className="mui-slider-right mui-disabled">
							<a className="mui-btn mui-btn-red">删除</a>
						</div>
						<div className="mui-slider-handle mui-table">
							<a href="javascript:;">
								<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
								</div>
							</a>
						</div>
					</li>
					<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
						<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" /></div>
						<div className="mui-slider-right mui-disabled">
							<a className="mui-btn mui-btn-red">删除</a>
						</div>
						<div className="mui-slider-handle mui-table">
							<a href="javascript:;">
								<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
								</div>
							</a>
						</div>
					</li>
					<li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
						<div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" /></div>
						<div className="mui-slider-right mui-disabled">
							<a className="mui-btn mui-btn-red">删除</a>
						</div>
						<div className="mui-slider-handle mui-table">
							<a href="javascript:;">
								<img className="mui-media-object mui-pull-left" src="assets/images/ad1.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad2.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
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
								<img className="mui-media-object mui-pull-left" src="assets/images/ad3.jpg"/>
								<div className="mui-media-body">¥112.50
									<p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div id="about" className="mui-page">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>设置
		</button>
		<h1 className="mui-center mui-title">关于海淘购</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view t-line">
					<li className="mui-table-view-cell b-line">
						<a id="rate" className="mui-navigate-right">评分鼓励</a>
					</li>
					<li className="mui-table-view-cell b-line mui-plus-visible">
						<a id="share" className="mui-navigate-right">分享推荐</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a id="tel" className="mui-navigate-right">客服电话</a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a id="feedback-btn" href="#feedback" className="mui-navigate-right">问题反馈</a>
					</li>
					<li id="check_update" className="mui-table-view-cell b-line">
						<a id="update" className="mui-navigate-right">检查更新</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div id="feedback" className="mui-page feedback">
	<div className="mui-navbar-inner mui-bar mui-bar-nav">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
			<span className="mui-icon mui-icon-arrowleft"></span>
		</button>
		<button id="submit" className="mui-btn mui-btn-blue mui-btn-link mui-pull-right" style={{width:"auto"}}>发送</button>
		<h1 className="mui-center mui-title">问题反馈</h1>
	</div>
	<div className="mui-page-content">
		<div className="mui-content-padded">
			<div className="mui-inline">问题和意见</div>
			<a className="mui-pull-right mui-inline" href="#popover">
				快捷输入
				<span className="mui-icon mui-icon-arrowdown"></span>
			</a>
			{/* <!--快捷输入具体内容，开发者可自己替换常用语--> */}
			<div id="popover" className="mui-popover">
				<div className="mui-popover-arrow"></div>
				<div className="mui-scroll-wrapper">
					<div className="mui-scroll">
						<ul className="mui-table-view">
							{/* <!--仅流应用环境下显示--> */}
							<li className="mui-table-view-cell stream">
								<a href="#">桌面快捷方式创建失败</a>
							</li>
							<li className="mui-table-view-cell"><a href="#">界面显示错乱</a></li>
							<li className="mui-table-view-cell"><a href="#">启动缓慢，卡出翔了</a></li>
							<li className="mui-table-view-cell"><a href="#">偶发性崩溃</a></li>
							<li className="mui-table-view-cell"><a href="#">UI无法直视，丑哭了</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="row mui-input-row">
			<textarea id='question' className="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
		</div>
		<p>图片(选填,提供问题截图,总大小10M以下)</p>
		<div id='image-list' className="row image-list"></div>
		<p>QQ/邮箱</p>
		<div className="mui-input-row">
			<input id='contact' type="text" className="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
		</div>
		<div className="mui-content-padded">
			<div className="mui-inline">应用评分</div>
			<div className="icons mui-inline" style={{marginLeft: "6px"}}>
				<i data-index="1" className="mui-icon mui-icon-star"></i>
				<i data-index="2" className="mui-icon mui-icon-star"></i>
				<i data-index="3" className="mui-icon mui-icon-star"></i>
				<i data-index="4" className="mui-icon mui-icon-star"></i>
				<i data-index="5" className="mui-icon mui-icon-star"></i>
			</div>
		</div><br />
	</div>
</div>

<div style={{height:"55px"}}></div>
<Footer/>
	</div>
		)
	}


}

