import React,{Component} from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Column.css";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import * as types from '../store/type';
import {asyncActionList} from '../store/asyncAction';


class Column extends Component{
	componentDidMount(){
		this.props.getColumn();
	}
    render(){
		 let list3=this.props.column;
		// console.log(list3)
        return (
            <>
                <Header/>
                <div className="main clearfloat" id="main">
				<div className="pro-tit box-s">
					产品分类
				</div>
				<ul className="pro-ctent clearfloat">
					{
						list3.map((item,index)=>(
							<li className="list fl clearfloat box-s" key={index}>
								<Link 
									to={{
										pathname:'/Follow'
									}}
								>
									<span className="icon5">
										<i></i>
										<img src={item.src} alt=""/>
									</span>
									<p className="tit">{item.name}</p>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
                <Footer/> 
            </>
        )
    }
};



let iMapStateToProps=(state)=>({
    column:state.column
});

let iMapDispatchProps=(dispatch)=>({
	getColumn:()=>{asyncActionList(
	//   '/data/column.json',
	'http://localhost:3000/column',
      dispatch,
      types.UPDATE_COLUMN, 
    )}
});//传参

export default connect(
    iMapStateToProps,
    iMapDispatchProps
)(Column);
