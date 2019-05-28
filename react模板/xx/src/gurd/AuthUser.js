import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let AuthUser=({component:Component, auth, userData,  ...rest})=>(
  <Route {...rest} render={(props)=>(
    auth ?
    <Component {...props} userData={userData} /> :
    <Redirect to="/Login"/>
  )}/>
);

let initMapStateToProps=state=>({
  auth:state.user.auth,
  userData:state.user.userData
});


export default connect(
  initMapStateToProps
)(AuthUser);