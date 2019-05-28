import React,{Component} from 'react';
import Footer from "../common/Footer";
import './shopcar.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
 import * as types from '../store/type';
// import {asyncActionDetail} from '../store/asyncAction';

class Shopcar extends Component{
    render(){
        let {buycar}=this.props;
        // console.log(buycar);
        return (      
       <>
            <div className="warp clearfloat">
                <div className="header2 clearfloat box-s" id="header">
                    <div className="left1 clearfloat fl">
                    <p className="back" onClick={()=>{window.history.go(-1)}}></p>
                    </div>
                    <div className="middle clearfloat fl">
                        购物车               
                    </div>
                    <div className="right1 fr clearfloat">
                    <Link className="back" to="/personl"></Link>
                    </div>
                </div>
                <ul className="main clearfloat shopcarmain" id="main">
                    <p className="shopcar-tit box-s">
                        已购商品
                        <span
                            className="qingk"
                            onClick={()=>{this.props.clearItem()}}
                        >清空购物车</span>
                    </p>
                   
                        {                         
							buycar.map((item,index)=>(
                                <li className="shop-list fl clearfloat box-s mb10" key={index}>
                                <div className="tu clearfloat fl">
                                    <span></span>
                                    <img src={item.src} alt=""/>
                                </div>
                                <div className="pro-price pro-price1 fr clearfloat box-s">
                                    <p className="bt">{item.name}</p>
                                    <p className="fu-bt"></p>
                                    <div className="jiage fl">
                                        <span className="tejia">¥{item.price}</span>
                                    </div>
                                   
                                    <div className="you fr">
                                        <div className="shxu"
                                            onClick={()=>{
                                                this.props.removeItem({id:item.id})
                                            }}>删除
                                        </div>
                                        <ul>
                                            <li className="first" onClick={()=>{
                                                this.props.changeItem({id:item.id,num:-1})
                                            }}>-</li>
                                            <li className="shu" >{item.num}</li>
                                            <li className="last" 
                                                onClick={()=>{
                                                    this.props.changeItem({id:item.id,num:1})
                                            }}>+</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
							))
						}                    
                </ul>				
                <div className="dibu dibu1 clearfloat box-s">          
                    <span className="price fl"><samp>合计：
                        </samp>¥
                            {
                                (()=>{
                                    let num=0
                                    this.props.buycar.map((item)=>{
                                        num+=item.price*item.num
                                    })
                                    return num
                                })()
                            }
                        </span>
                    
                    <Link to="/jiushuan" className="shopcar fr">
                        去结算
                    </Link>
                </div>
            </div>
            <Footer/>
       </>
       )
    }
};

let MapStateToProps=(state)=>({
    buycar:state.buycar
});
let MapDispatchProps=(dispatch)=>({
    changeItem:(data)=>(
		dispatch({
			type:types.CHANGE_ITEM,
			payload:data
		})
	),
	removeItem:(data)=>{
		dispatch({
			type:types.REMOVE_ITEM,
			payload:data
		})
	},
	clearItem:()=>{
		dispatch({
			type:types.CLEAR_ITEM
		})
	}
});//传参

export default connect(
    MapStateToProps,
    MapDispatchProps
)(Shopcar);
