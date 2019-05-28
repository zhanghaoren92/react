
import React from "react";
import './Header.css';

let Header= (props)=>(
    <div className="header clearfloat box-s" id="header">
        <div className="search clearfloat fl">
            <input type="button"  className="btn fl" />
            <input type="text" id=""  placeholder="搜索你需要的宝贝" className="text" />
        </div>
        <div className="left fr clearfloat">
            <span className="icon2"></span>
            <p className="t_c">购物车</p>
        </div>
        <div className="left fr clearfloat">
            <span className="icon1"></span>
            <p className="t_c">在线服务</p>
        </div>				
	</div>
);

export default Header;

