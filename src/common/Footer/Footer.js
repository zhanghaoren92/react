import React,{Component} from 'react';
import './assets/css/footer.css';
import {NavLink} from 'react-router-dom'
export default class Footer extends Component{
    render(){
        return (
            <div className='Footer'>
                    <nav className="mui-bar mui-bar-tab">
                        <div className="t-line">
                            <NavLink className='aui-tab-item' activeClassName='mui-active' to='/home'>
                                <span className="mui-icon mui-icon-home"></span>
                                <span className="mui-tab-label">首页</span>
                            </NavLink>
                        
                            <NavLink className='aui-tab-item' activeClassName='mui-active' to='/Category'>
                                <span className="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                                <span className="mui-tab-label">分类</span>
                            </NavLink>
                           
                            <NavLink className='aui-tab-item' activeClassName='mui-active' to='/car'>
                                <span className="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                                <span className="mui-tab-label">购物车</span>
                            </NavLink>
                          
                            <NavLink className='aui-tab-item' activeClassName='mui-active' to='/user'> 
                                <span className="mui-icon mui-icon-extra mui-icon-extra-people"></span>
                                <span className="mui-tab-label">我的</span>
                            </NavLink>
                           
                        </div>
                    </nav>
            </div>
        )
    }
}