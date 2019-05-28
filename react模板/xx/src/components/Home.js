import React,{Component} from 'react';
import Slider from "./Slider";
import List from "./List";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {connect} from "react-redux";
import {asyncActionList} from '../store/asyncAction';
import * as types from '../store/type';


class Home extends Component{
    componentDidMount(){
        this.props.getHome();
    }
    render(){
       // console.log(this.props.home)
        return (
            <React.Fragment>               
                <Header/>
                 <Slider/>               
                <List list1={this.props.home} dataName="home" />
                <Footer/>
            </React.Fragment>
           
        )
    }
};


let initMapStateToProps=(state)=>({
    home:state.home,
});
let initMapDispatchProps=(dispatch)=>({
    getHome:()=>{asyncActionList(
      'http://localhost:3000/list',
      dispatch,
      types.UPDATE_HOME  
    )}
});//传参

export default connect(
    initMapStateToProps,
    initMapDispatchProps
)(Home);