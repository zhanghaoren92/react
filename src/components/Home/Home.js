import React,{Component} from 'react';
import './assets/css/home.css';

import Content from '../Content/Content.js';
// import {connect} from 'react-redux'
// import {stateList} from '../../store/actions/stateList'
// import {UPDATE_PRODUCT} from '../../store/types'





export default class Home extends Component{
    //  constructor(props){
    //     super();
    //     props.getList();
    //  }
    render(){
        // let {list}=this.props;
        // console.log(list)
        return (    
                <Content/>   
        )
    }
    componentDidMount(){
       
    }
}
// const initMapStateToProps=state=>({
//     list:state.list
// })
// const initMapDispatchToProps=dispatch=>({
//     getList:()=>dispatch(stateList({
//         url:'data/list.json',
//         type:UPDATE_PRODUCT
//     }))
// })

// export default connect(
//     initMapStateToProps,
//     initMapDispatchToProps
// )(Home)