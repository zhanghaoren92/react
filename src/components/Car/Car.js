import React,{Component} from 'react';
import './assets/css/car.css';
import Footer from '../../common/Footer/Footer.js';
import './assets/css/car.css'
import $ from 'jquery'
//图片资源引入
import ad1 from './assets/img/ad1.jpg';
import ad2 from './assets/img/ad2.jpg';
import ad3 from './assets/img/ad3.jpg';
import ad4 from './assets/img/ad4.jpg';
import { UPDATE_CAR, UPDATE_ADD } from '../../store/types';
import {connect} from 'react-redux'

import {stateCar} from '../../store/actions/stateCar'
import {stateAdd} from '../../store/actions/stateAdd'
class Car extends Component{
    constructor(props){
        super()
        this.state={
            totalPrice:0.00,
            states:false
        }
        this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        props.getCar()
        
    }
    totalPrice = () => {
        let sum = 0
        this.cart.forEach((item) => {
            // if (item.checked === true) {
                // console.log(item.c_dan_all_price)
                // console.log(item.c_pirce_zhe)
                
            sum += item.c_buy_num * item.c_pirce_zhe 
            // }
        })
        this.setState({
            totalPrice: sum.toFixed(2)
        })
        // localStorage.setItem('cart', JSON.stringify(this.state.cartdata))
    }

    signalChange=(ev,id) => {
    //    console.log(ev.target)
    //    console.log(id)
       
       fetch(
           `/app/clothes_is_select/?c_id=${id}`
       ).then(
           res=>res.json()
        ).then(
            data=>{
                console.log(data)
                this.setState({
                    totalPrice:data.get_total_price - 976
                })
            }
        )
       if(!ev.target.getAttribute('checked')){
        ev.target.removeAttribute('checked')
       }else{
        ev.target.setAttribute('checked','true')
       }

    }
    
    checkChange = (i) => {
        // this.setState({
        //   cartdata: this.state.cartdata.map((item, index) => {
        //     if (index === i) {
        //       item.checked = !item.checked
        //     }
        //     return item
        //   })
        // })
        // fetch(
        //     `/app/all_clothes_is_select/?all_clothes_select=${id}`
        // ).then(
        //     res=>res.json()
        //  ).then(
        //      data=>{
        //          console.log(data)
        //          this.setState({
        //              totalPrice:data.get_total_price
        //          })
        //      }
        //  )
        this.setState({
            states:!this.state.states
        })
        console.log(this.state.states)
        if(!this.state.states){
            // this.totalPrice()
            fetch(
                `/app/all_clothes_is_select/?all_clothes_select=0`
            ).then(
                res=>res.json()
             ).then(
                 data=>{
                     console.log(data)
                     this.setState({
                         totalPrice:data.get_total_price
                     })
                 }
             )
             this.refs.signal.setAttribute('checked','true')
             if(!this.refs.signal.getAttribute('checked')){
                this.refs.signal.removeAttribute('checked')
               }else{
                this.refs.signal.setAttribute('checked','true')
               }
             console.log(this.refs.signal)
        }else{
            fetch(
                `/app/all_clothes_is_select/?all_clothes_select=1`
            ).then(
                res=>res.json()
             ).then(
                 data=>{
                     console.log(data)
                     this.setState({
                         totalPrice:data.get_total_price - 976
                     })
                 }
             )
            // this.setState({
            //     totalPrice: 0
            // })
        }

        // this.cart.map((item,index)=>{
        //     if(index === i){
        //         this.refs[i].setAttribute('checked',`${!this.state.states}`) 
                // this.refs[i].setAttribute('checked',`${!this.refs[i].getAttribute('checked')}`) 
                
                // console.log(this.refs[i].getAttribute('checked')) 
            // }
        // })
        // let cartFlag = this.state.cartdata.every((item, index) => {
        //   if (item.checked === false) {
        //     return false
        //   } else {
        //     return true
        //   }
        // })
        // this.refs.checkAll.checked = cartFlag
        // // console.log(this.refs.checkAll.checked)
      
        
        // console.log(i)
    }
    del(id){
        if(this.refs[id].value>2){
            this.refs[id].value=+this.refs[id].value-1
        }else{
            this.refs[id].value=1
        }
        fetch(
            `/app/sub_clothes_cart/?c_id=${id}`
        )
    }

    xxx(id){
        this.refs[id].value=+this.refs[id].value+1
    }

    render(){
        
        // console.log(this.props.goods)
        return (
            
            <React.Fragment>
                    <header className="mui-bar mui-bar-nav aui-header b-line">
                        <h1 className="mui-title">购物车</h1>
                        <a className="mui-icon mui-icon-trash mui-pull-right"></a>
                    </header>
                    <div className="mui-content">
                        <div className="aui-img-clear" style={{paddingTop:"15px"}}>
                            <ul className="mui-table-view mui-table-view" id="OA_task_1">
                                {
                                    this.props.goods.carts_list&&this.props.goods.carts_list.map((item,index)=>(
                                        <li key={item.c_id} className="list">
                                            <div style={{height:'92px',width:'40px',paddingLeft:'47px'}} className=" mui-input-row mui-checkbox">
                                                <input className='xz' ref="signal"  name="checkbox"   type="checkbox" onChange={(e) => {this.signalChange(e,item.c_id)}} />
                                            </div>
                                            <div className="detail">
                                                <a href="javascript:;">
                                                    <img className="image" src={item.c_img}/>
                                                    <div className="wz">
                                                        ¥{item.c_dan_all_price}
                                                        <p className="mui-ellipsis">{item.c_name}</p>
                                                        <div className='number'>
                                                            <input id='reduce' type='button' value='-'  onClick={()=>{
                                           
                                                                this.del(item.c_id)
                                                                }}  />
                                                            <input index={index} ref={item.c_id} type='text' defaultValue={item.c_buy_num} />
                                                            <input className='add' onClick={()=>{
                                                                this.xxx(item.c_id)
                                                                this.props.getAdd(item.c_id);
                                                                }} type='button' value='+'/>
                                                            {/* onClick={()=>{this.props.getAdd(item.c_id)}} */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        
                                            <div className="delect">
                                                <a className="">删除</a>
                                            </div>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>

                        <div className="devider "></div>
                        <div className="aui-list t-line">
                            <h2>猜你喜欢</h2>
                            <ul className="mui-table-view mui-grid-view">
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad1}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad2}/>
                                        <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                        <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad3}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad4}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad4}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad2}/>
                                        <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                        <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad3}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad4}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad1}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad2}/>
                                        <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                        <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad3}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad3}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad1}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad2}/>
                                        <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                                        <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad3}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                                    </a>
                                </li>
                                <li className="mui-table-view-cell mui-media mui-col-xs-6">
                                    <a href="#">
                                        <img className="mui-media-object" src={ad4}/>
                                        <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                        <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div style={{height:"50px"}}></div>
                    <nav className="mui-bar mui-bar-tab" style={{bottom:"50px"}}>
                        <div className="t-line aui-on-cell">
                            <div className="title mui-input-row mui-checkbox mui-left" style={{position:"absolute", top:"9px"}}><input onChange={() => {this.checkChange()}} checked={this.state.states} name="checkbox" value="Item 1" type="checkbox" /><em className="ss-aui">全选</em></div>

                            <div className="aui-onc">
                                <p style={{display:"inline-block"}}><span style={{color:"#fb4545"}}>合计：¥{this.state.totalPrice} </span>不含运费</p>
                                <a href="#" className="aui-got">去结算</a>
                            </div>
                        </div>



                    </nav>
                    <Footer/>
            </React.Fragment>
        )
    }
    componentDidMount(){
    
        
    //  const totalPrice = () => {
    //         let sum = 0
    //         this.cart.forEach((item) => {
    //             // if (item.checked === true) {
    //                 console.log(item.c_dan_all_price)
    //                 // console.log(item.c_pirce_zhe)
                    
    //             sum += item.c_buy_num * item.c_pirce_zhe 
    //             // }
    //         })
    //         this.setState({
    //             totalPrice: sum.toFixed(2)
    //         })
    //         // localStorage.setItem('cart', JSON.stringify(this.state.cartdata))
    //     }
        // totalPrice()
        // this.totalPrice()
    }
  
}
const initMapStateToProps=state=>({
	goods:state.goods,
	bFoot:state.bFoot
  });
    
  const initMapDispatchToProps=dispatch=>({
	getCar:()=>dispatch(stateCar({
	  url:`/app/cart/`,
	  type:UPDATE_CAR,
	
    })),
    getAdd:(id)=>dispatch(stateAdd({
        url:`/app/add_clothes_cart/`,
        type:UPDATE_ADD,
        id:id
      })),
	// clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
	// setFoot:()=>dispatch({type:VIEW_FOOT,payload:true}),
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Car)