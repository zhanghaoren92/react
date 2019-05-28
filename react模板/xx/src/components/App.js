import React,{Component} from 'react';
import Home from "./Home";

 import Detail from "./Detail";
 import Column from "./Column";
 import User from "./User";
 import Login from "./Login";
 import Follow from "./Follow";
 import Shopcar from "./shopcar";
 import Error from "../common/Error";
 import Reg from "./Reg";
import {Route,Redirect,Switch} from "react-router-dom";
import Loading from '../common/Loading';
import connect from "react-redux/es/connect/connect";
import AuthUser from "../gurd/AuthUser";
//import * as types from "../store/type";


class App extends Component{
    componentWillReceiveProps(nextProps){//路由的监听
        if(this.props.location.pathname!==nextProps.location.pathname){
            //let routerPath=nextProps.location.pathname;
            //console.log(routerPath)

        }
         
    }
    render(){
        return (
            <>
                 {this.props.bLoading && <Loading/>}
                <Switch>                                     
                    <Route path="/Home" component={Home}/>                                 
                    <Route path="/Column" component={Column}/>
                    <Route path="/Detail/:id" component={Detail}/>
                    <AuthUser
                        path="/User" 
                        component={User}
                    />
                    <Route path="/Login" component={Login}/>
                    <Route path="/Follow" component={Follow}/>
                    <Route path="/Shopcar" component={Shopcar}/>
                    <Route path="/Reg" component={Reg}/>
                    <Redirect exact from="/" to="/Home"/>
                    <Route path="/Error" component={Error}/>
                </Switch>
                
                
            </>

        )
    }
};


let initMapStateToProps=(state)=>({
    bLoading:state.bLoading
});
let initMapDispatchProps=(dispatch)=>({
    // viewLoading:(bl)=>{dispatch(types.VIEW_LOADING,bl)}
});//传参

export default connect(
    initMapStateToProps,
    initMapDispatchProps
)(App);
