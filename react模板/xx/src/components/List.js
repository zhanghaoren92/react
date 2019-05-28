
import React from "react";
import './List.css';
import {Link}from 'react-router-dom';
import querystring from 'query-string';

let List= ({list1,dataName})=>(
    <div>
        	<div className="fication clearfloat">
					<ul>					
						<li>
							<span className="icon3">
								<img src="/img/icon1.png" alt=""/>
							</span>
							<p className="t_c">洁面</p>
						</li>					
						<li>
							<span className="icon3">
								<img src="/img/icon2.png" alt=""/>
							</span>
							<p className="t_c">爽肤水</p>
						</li>				
						<li>
							<span className="icon3">
								<img src="/img/icon3.png" alt=""/>
							</span>
							<p className="t_c">面霜</p>
						</li>					
						<li>
							<span className="icon3">
								<img src="/img/icon4.png" alt=""/>
							</span>
							<p className="t_c">精华</p>
						</li>						
					</ul>
				</div>
			
				<div className="town clearfloat">
					<div className="tit clearfloat">
						<img src="/upload/tit.png" alt=""/>
					</div>
					<div className="bottom clearfloat">
						<div className="zuo clearfloat fl box-s">
							<a href="pro-content.html" >
								<span></span>
								<img src="/upload/1.jpg" alt="" />
							</a>
						</div>
						<div className="you clearfloat fr box-s">
							<div className="shang clearfloat fl box-s">
								<a href="pro-content.html" >
									<span></span>
									<img src="/upload/2.jpg" alt=""/>
								</a>
							</div>
							<div className="shang xia clearfloat fl box-s">
								<a href="pro-content.html">
									<span></span>
									<img src="/upload/3.jpg" alt=""/>
								</a>
							</div>
						</div>
						<div className="last clearfloat box-s fl">
							<a href="pro-content.html">
								<span></span>
								<img src="/upload/4.jpg" alt=""/>
							</a>
						</div>
					</div>					
				</div>
				
				<div className="products clearfloat">
					<div className="tit clearfloat">
						<img src="upload/tit1.png" alt=""/>
					</div>
					<ul className="lists clearfloat">
						{
							list1.map((item,index)=>(
								<li className="list fl clearfloat box-s" key={index}>
									<Link 
										to={{
											pathname:'/Detail/'+item.id,
											search:querystring.stringify({
												dataName:dataName
											})
										}}
									>
										<span></span>
										<img src={item.src} alt=""/>
										<div className="bt clearfloat">
											<samp className="opa8"></samp>
											<p className="nr t_c">超值价：¥{item.price}</p>
										</div>
									</Link>
								</li>
							))
						}
						
					</ul>
				</div>
				<div className="kb"></div>
    </div>
);

export default List;

