import React from 'react'

import {Route,Redirect} from 'react-router-dom'
import Login from '../Login/Login.js';
import Car from '../Car/Car.js';



class AuthUser extends React.Component{
  



  render(){
    
    let {component:Component,...rest} = this.props
    let username = localStorage.username ? localStorage.username : ''
    
    return(
      <Route {...rest}  render={(props)=>(
        username  ? <Component {...props} username={username}/> //data,就是数据预载
         : <Redirect to="/login"/>
      )}></Route>
    )
  }
}
export default AuthUser