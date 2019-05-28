import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import querystring from 'query-string';
import {connect} from 'react-redux'
export default class List extends Component{

    render(){
        // console.log(this.props.list)
        return (
            <ul className="mui-table-view mui-grid-view">
                {
                    this.props.list.clothes_list&&this.props.list.clothes_list.map((item,index)=>(
                        <li key={item.c_id} className="mui-table-view-cell mui-media mui-col-xs-6">
                        <Link to={`/page/${item.c_id}`}>
                                    <img className="mui-media-object" src={item.c_img}/>
                                    <div className="mui-media-body">{item.c_name}</div>
                                    <div className="goods_info"> <span className="price_info">${item.c_price_dazhe}</span> <span className="fav_num">{item.c_buy_num}人购买</span> </div>
                            </Link>
                        </li>
                    ))
                }
               
            </ul>
        )
    }
}
// const initMapStateToProps=state=>({
//     list:state.list
// })
// const initMapDispatchToProps=dispatch=>({
   
// })

// export default connect(
//     initMapStateToProps,
//     initMapDispatchToProps
// )(List)