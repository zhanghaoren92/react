import React,{Component} from 'react';
import Footer from "../common/Footer";
import "./User.css";
import {Link} from 'react-router-dom';

class User extends Component{
    render(){
        return (
            <>
                <div className="warp clearfloat">
                    <div className="header2 clearfloat box-s" id="header">
                        <div className="left1 clearfloat fl">
                        <p className="back" onClick={()=>{window.history.go(-1)}}></p>
                        </div>
                        <div className="middle clearfloat fl">
                            个人中心
                        </div>
                        <div className="right1 fr clearfloat">
                        <Link className="back" to="/personl"></Link>
                        </div>
                    </div>
		
                    <div id="main" className="clearfloat">
                        <div className="p-top clearfloat">
                            <Link to="/personal">
                                <div className="tu">
                                    <img src="/img/touxiang.png" alt=""/>
                                </div>
                                <p className="name">
                                    {localStorage.getItem('username')}                                  
                                </p>
                            </Link>
                            <div className="p-bottom clearfloat">
                                <ul>
                                    
                                        <li className="box-s">
                                            <span className="opa6"></span>
                                            <p className="bt">消费总额</p>
                                            <p className="price">0.00</p>
                                        </li>
                                   
                                    
                                        <li className="box-s">
                                            <span className="opa6"></span>
                                            <p className="bt">我的积分</p>
                                            <p className="price">0</p>
                                        </li>
                                    
                                        <li className="box-s">
                                            <span className="opa6"></span>
                                            <p className="bt">我的足迹</p>
                                            <p className="price">0</p>
                                        </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="p-lie clearfloat">
                            <ul>
                                <li>
                                    <Link to="/shopcar" className="icon16 fl box-s">待付款<span className="fr">|</span></Link>							
                                </li>
                                <li>
                                    <Link to="/shopcar" className="icon17 fl box-s">待收货<span className="fr">|</span></Link>							
                                </li>
                                <li>
                                    <Link to="/shopcar" className="icon18 fl box-s">全部订单</Link>							
                                </li>
                            </ul>
                        </div>
                        <div className="p-list clearfloat">
                            <ul>
                                <Link to="/Column">
                                    <li className="box-s">
                                        <p className="fl icon19">我的收藏</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="/shopcar">
                                    <li className="box-s">
                                        <p className="fl icon20">我的购物车</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="box-s">
                                        <p className="fl icon21">会员等级</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="box-s">
                                        <p className="fl icon22">我的优惠券</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li className="box-s">
                                        <p className="fl icon23">我的佣金</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="/address">
                                    <li className="box-s">
                                        <p className="fl icon24">配送地址</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="balance.html">
                                    <li className="box-s">
                                        <p className="fl icon25">消费记录</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="/xiugai">
                                    <li className="box-s">
                                        <p className="fl icon26">修改密码</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="dinpu.html">
                                    <li className="box-s">
                                        <p className="fl icon27">我的店铺</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <Link to="/Login">
                                    <li className="box-s">
                                        <p className="fl icon28">退出登录</p>
                                        <span className="back fr"></span>
                                    </li>
                                </Link>
                                <div className="kb"></div>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
};

export default User;