import React,{Component} from 'react';
import './assets/css/app.css';
import 'antd-mobile/dist/antd-mobile.css';
import Footer from '../../common/Footer/Footer.js';
import Home from '../Home/Home.js';
import Dope from '../Dope/Dope.js';
import Alipay from '../Alipay/Alipay.js';
import Car from '../Car/Car.js';
import Category from '../Category/Category.js';
// import Hot from '../Hot/Hot.js';
import Kill from '../Kill/Kill.js';
import Login from '../Login/Login.js';
import User from '../User/User.js';
import New from '../New/New.js';

import News from '../News/News.js';
import Order from '../Order/Order.js';
import Page from '../Page/Page.js';
import Register from '../Register/Register.js';
import Search from '../Search/Search.js';
import Suit from '../Suit/Suit.js';
import {Route,Redirect,Switch} from 'react-router-dom'
import Loading from '../../common/loading/Loading'
import {connect} from 'react-redux'

import AuthUser from './AuthUser'
import AuthCar from './AuthCar'

 class App extends Component{
    render(){
        let {bLoading,bFoot}=this.props
        // console.log(bLoading)
        return (
            <React.Fragment>
                 {bLoading && <Loading/>}
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/dope' component={Dope} />
                    <Route path='/alipay' component={Alipay} />
                    <AuthCar path='/car' component={Car} />
                    <Route exact  path='/category' component={Category} />
                    {/* <Route path='/hot' component={Hot} /> */}
                    <Route path='/kill' component={Kill} />
                    <Route path='/login' component={Login} />
                    
                    <Route path='/category/new/:id' component={New} />
                    <Route path='/new' component={New} />
                    <Route path='/news' component={News} />
                    <Route path='/order' component={Order} />
                    <Route path='/page/:id' component={Page} />
                    <Route path='/register' component={Register} />
                    <Route path='/search' component={Search} />
                    <Route path='/suit' component={Suit} />
                    <AuthUser path='/user' component={User} />
                    <Route path='/user' component={User} />
                    <Redirect exact from='/static/index.html' to='/home' />
                </Switch>
                {bFoot&&<Footer/>}
            </React.Fragment>
        )
    }
}
const initMapStateToProps=state=>({
    bFoot:state.bFoot,
    bLoading:state.bLoading
  });
  
  
export default connect(
    initMapStateToProps
  )(App)