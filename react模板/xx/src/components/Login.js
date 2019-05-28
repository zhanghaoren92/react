import React,{Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
// import { asyncActionAuth } from '../store/asyncAction';
import * as types from "../store/type";
import axios from 'axios';

class Login extends Component{
    state={
        username:'',
        password:'',
      };
    render(){
        return (
            <>
             <div className="header2 clearfloat box-s" id="header">
                    <div className="left1 clearfloat fl">
                        <p className="back" onClick={()=>{window.history.go(-1)}}></p>
                    </div>
                    <div className="middle clearfloat fl">
                        登录
                    </div>
                    <div className="right1 fr clearfloat">
                        <Link className="back" to="/personl"></Link>
                    </div>
            </div>
            <div className="login">
                <div className="logo"></div>
                <div className="main">
                    <table width="100%" border="0" cellSpacing="0" className="mainl">
                    <tbody> 
                        <tr>
                            <td className="text">
                                <input 
                                    type="text/css" 
                                    className="text1" 
                                    placeholder="输入手机号" 
                                    onKeyUp={(ev)=>(this.setState({username:ev.target.value}))}
                                />
                            </td>
                        </tr>
                    </tbody> 
                    </table>
                    <div className="linee"></div>
                    <table width="100%" border="0" cellSpacing="0" className="mainl">
                    <tbody> 
                        <tr>
                            <td className="text">
                                <input 
                                    type="password" 
                                    className="text1" 
                                    placeholder="输入密码" 
                                    onKeyUp={(ev)=>(this.setState({password:ev.target.value}))}
                                />
                            </td>
                        </tr>
                    </tbody> 
                    </table>
                    <div className="linee"></div>
                </div>
                <div className="button">                      
                    <input 
                        type="button"
                        value="登 录" 
                        className="text2"
                        onClick={this.handleClick}

                    />
                </div>
                <div className="footrt">
                    <div className="footrt_left">
                        <Link to='/Reg'>
                            注册新用户
                        </Link>           
                    </div>
                    <div className="footrt_right"><a href="password.html">忘记密码？</a></div>
                </div>
            </div>
         </>
        )
    }
    handleClick = () => {
        axios('http://localhost:3000/login',{
          params:{
            username:this.state.username,
            password:this.state.password
          }
        }).then((res)=>{
             //console.log('访问login接口后',res.data);
            if(res.data===1){
                alert("登录成功");
                localStorage.setItem('username',this.state.username);
                this.props.changeUser({auth:true});
                
                this.props.history.push('User') 
            }
            if(res.data===0){
                  alert("用户名或密码错误，请重新登录")
                //   history.go(0)
            }
        }).catch(function (error) {
            console.log(error);
        })
      }
};

let initMapStateToProps=(state)=>({
    auth:state.user.auth,
    userData:state.user.userData
});
let initMapDispatchProps=dispatch=>({
    changeUser:(user)=>{dispatch({type:types.UPDATE_USER,
        payload:user})}
   
});//传参

export default connect(
    initMapStateToProps,
    initMapDispatchProps
)(Login);
