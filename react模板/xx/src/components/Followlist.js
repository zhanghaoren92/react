
import React from "react";
import {Link}from 'react-router-dom';
import querystring from 'query-string';
import './Follow.css';

let Followlist= ({list,dataName})=>(
    <div>
        	<div className="clearfloat content-wrap" id="main">
				<ul className="product-list clearfix">
					{
							list.map((item,index)=>(
								<li className="list fl clearfloat box-s" key={index}>
									<Link 
										to={{
											pathname:'/Detail/'+item.id,
											search:querystring.stringify({
												dataName:dataName
											})
										}}
									>
										<div className="tu">
										<span></span>
										<img src={item.src} alt=""/>
										</div>
										<p className="tit">{item.name}</p>
										<p className="price"><samp>￥210</samp>&nbsp;&nbsp;¥{item.price}</p>
									</Link>
								</li>
							))
						}
				</ul>
				
			</div>
			<div className="kb"></div>
    </div>
);

export default Followlist;

