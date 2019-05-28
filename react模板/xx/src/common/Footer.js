
import React from "react";
import './Footer.css';
import {NavLink} from "react-router-dom";
let Footer= (props)=>(
    <div className="footer clearfloat box-s" id="footer">
				<ul>
					<li>
						<NavLink to="/Home" activeClassName="cur"><p className="icon12"></p></NavLink>
						<NavLink to="/Home" activeClassName="cur"><p className="tit">首页</p></NavLink>
						
					</li>
					<li>
						<NavLink to="/Column" activeClassName="cur"><p className="icon13"></p></NavLink>
						<NavLink to="/Column" activeClassName="cur"><p className="tit">分类</p></NavLink>
						
					</li>
					<li>
						<NavLink to="/shopcar" activeClassName="cur"><p className="icon14"></p></NavLink>
						<NavLink to="/shopcar" activeClassName="cur"><p className="tit">购物车</p></NavLink>
						
					</li>
					<li>
						<NavLink to="/User" activeClassName="cur"><p className="icon15"></p></NavLink>
						<NavLink to="/User" activeClassName="cur"><p className="tit">个人中心</p></NavLink>
						
					</li>
				</ul>
			</div>
);

export default Footer;
