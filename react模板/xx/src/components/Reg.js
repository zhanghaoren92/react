import React,{Component} from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Reg extends Component{
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
                        注册
                    </div>
                    <div className="right1 fr clearfloat">
                    <Link className="back" to="/personl"></Link>
                    </div>
                </div>
                <div className="login">
    	<div className="logo"></div>
        <div className="main">
        	<table width="100%" border="0" cellSpacing="0" className="main1">
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
			<table width="100%" border="0" cellSpacing="0" className="main1">
            <tbody> 
                <tr>
                    <td className="text">
                        <input 
                            type="text/css" 
                            className="text1" 
                            placeholder="输入新密码" 
                            onKeyUp={(ev)=>(this.setState({password:ev.target.value}))}
                        />
                    </td>
                </tr>
            </tbody> 
            </table>
            <div className="linee"></div>
            <table width="100%" border="0" cellSpacing="0" className="main1">
            <tbody> 
                <tr>
                    <td className="text"><input type="text/css" className="text1" placeholder="输入确认密码" /></td>
                </tr>
            </tbody> 
            </table>
            <div className="linee"></div>
        </div>
        <div className="button"><input type="button" value="注 册" className="text2" onClick={this.handleClick} /></div>
         <div className="footrt">
            <div className="footrt_left">             
                <Link to='/Login'>已有账号？立即登录</Link>         
           </div> 
           
        </div>
    </div>

            </>
        )
    }
    handleClick = () => {
        axios('http://localhost:3000/reg',{
          params:{
            username:this.state.username,
            password:this.state.password
          }
        }).then((res)=>{
            if(res.data.error===0){
              //路由跳转
              alert('注册成功');
              //存到状态管理，或者直接跳转到user,或者传数据给user
              window.location.pathname="/Login"
            }
            }).catch(function (error) {
            console.log(error);
        })
      }
};

export default Reg;