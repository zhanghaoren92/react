import React,{Component} from 'react';
import Footer from '../common/Footer';
 //import {Link} from 'react-router-dom';
import {connect} from "react-redux";
// import querystring from 'query-string';
import * as types from '../store/type';
import {asyncActionList} from '../store/asyncAction';
import Followlist from "./Followlist";

import "./Follow.css"

class Follow extends Component{
	componentDidMount(){
		// let dataName=querystring.parse(this.props.location.search).dataName;
		// let id=this.props.match.params.id;
		this.props.getFollow();
		
	}
    render(){
		// let follow=this.props.follow;
		// console.log(follow);
				
        return (
			
            <>
			
            <div className="header header3 clearfloat box-s" id="header">
				<div className="left fl clearfloat">
					<span className="icon32 menu-button" id="open-button"></span>
				</div>	
				<div className="search clearfloat fr">
					<input type="button"  className="btn fl" />
					<input type="text"  placeholder="搜索你需要的宝贝" className="text" />
				</div>						
			</div>
					
			<Followlist list={this.props.follow} dataName="follow"/>
            <Footer/>
            </>
        )
    }
};


let iMapStateToProps=(state)=>({
    follow:state.follow
});

let iMapDispatchProps=(dispatch)=>({
	getFollow:()=>{asyncActionList(
      'http://localhost:3000/list',
      dispatch,
      types.UPDATE_FOLLOW, 
    )}
});//传参

export default connect(
    iMapStateToProps,
    iMapDispatchProps
)(Follow);
