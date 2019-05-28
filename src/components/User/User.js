import React, { Component } from 'react'
import './assets/css/user.css'
// import '../assets/css/common.css'
import Footer from '../../common/Footer/Footer.js';
import { NavBar, Icon, List, Badge, Popover,Button } from 'antd-mobile';
import headImg from './assets/image/touxiang.png'
import icon5 from './assets/image/icon5.png'

const Item = Popover.Item;

export default class User extends Component {
	state = {
		visible: false,
		selected: '',
		// user: ''
	};
	onSelect = (opt) => {
		// console.log(opt.props.value);
		this.setState({
			visible: false,
			selected: opt.props.value,
		});
	};
	handleVisibleChange = (visible) => {
		this.setState({
			visible,
		});
	};
	// componentDidMount () {
  //   this.setState({
  //     user: localStorage.user
  //   })
	// }
	logout = () => {
		console.log(1)
    localStorage.setItem('username', '')
    this.props.history.push({pathname:'/home'});
  }

	render() {
		return (
			<div>
				<NavBar
					style={{ borderBottom: " 1PX solid rgba(221,221,221,.3)" }}
					icon={<Icon type="left" />}
					mode="light"
					rightContent={
						<Popover mask
							overlayClassNameclassNameName="fortest"
							overlayStyle={{ color: 'currentColor' }}
							visible={this.state.visible}
							overlay={[
								(<Item key="4" value="scan"  data-seed="logId">个人信息</Item>),
								(<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }} ><span onClick={this.logout}>注销</span></Item>),
							]}
							align={{
								overflow: { adjustY: 0, adjustX: 0 },
								offset: [-10, 0],
							}}
							onVisibleChange={this.handleVisibleChange}
							onSelect={this.onSelect}
						>
							<div style={{
								height: '100%',
								padding: '0 15px',
								marginRight: '-15px',
								display: 'flex',
								alignItems: 'center',
							}}
							>
								<Icon type="ellipsis" />
							</div>
						</Popover>
					}
				> 个人中心
				</NavBar>
				<div id="main" className="clearfloat" style={{ paddingBottom: "48px" }}>
					<div className="p-top clearfloat">
						<a href="#">
							<div className="tu">
								<img src={headImg} style={{width: "100%", height: "100%"}}/>
							</div>
							<p className="name" style={{marginBottom: "0"}}>{this.props.username}</p>
						</a>
						<div className="p-bottom clearfloat">
							<ul>
								<a href="#">
									<li className="box-s">
										<span className="opa6"></span>
										<p className="bt">消费总额</p>
										<p className="price">10.00</p>
									</li>
								</a>
								<a href="#">
									<li className="box-s">
										<span className="opa6"></span>
										<p className="bt">我的积分</p>
										<p className="price">10</p>
									</li>
								</a>
								<a href="#">
									<li className="box-s">
										<span className="opa6"></span>
										<p className="bt">我的足迹</p>
										<p className="price">10</p>
									</li>
								</a>
							</ul>
						</div>
					</div>
					<div className="p-lie clearfloat">
						<ul>
							<li>
								<a href="javascript:;" className="icon16 fl box-s">待付款<span className="fr">|</span></a>
							</li>
							<li>
								<a href="javascript:;" className="icon17 fl box-s">待收货<span className="fr">|</span></a>
							</li>
							<li>
								<a href="javascript:;" className="icon18 fl box-s">全部订单</a>
							</li>
						</ul>
					</div>

				
					<List.Item

						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon20">我的购物车</span>
					</List.Item>
					<List.Item
						
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon21">会员等级</span>
					</List.Item>
					<List.Item
						
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon22">我的优惠券</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon23">我的佣金</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon24">配送地址</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon25">消费记录</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon26">修改密码</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
						
						<span style={{ marginLeft: 12 }} className="icon27">我的店铺</span>
					</List.Item>
					<List.Item
						arrow="horizontal"
					>
					
						<span style={{ marginLeft: 12 }} className="icon28">账号绑定</span>
					</List.Item>
				</div>
				<Footer />
			</div>
		)
	}
	
}