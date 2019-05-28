import React, { Component } from "react";
import {Route,Link,NavLink,Switch,Redirect} from 'react-router-dom'

import "./assets/css/login.css";

export default class Login extends Component {
	state={
		username:'',
		password:'',
		msg:"请把信息输入完整"
	}

	userChange = ev => (
		this.setState({
			username:ev.target.value
		})
	)

	passChange = ev => (
		this.setState({
			password:ev.target.value
		})
	)

	login(){
		let params = new URLSearchParams();
		params.append("u_name",this.state.username);
		params.append("u_password",this.state.password);
	
		if(this.state.username && this.state.password){
			fetch(
				'/app/login/',
				{
					method:'POST',					
					body:params
				}
			).then(
				res=>res.json()
			)
			.then(
				res=>{
					// console.log(res)
					if(res.code == 0){						
						this.setState({
							msg:res.msg
						})
						alert(this.state.msg)
						localStorage.setItem('username', this.state.username)
						this.props.history.push({pathname:'/user'})
					}else{
						this.setState({
							msg:res.msg
						})
						alert(this.state.msg)
					}
					
				}
			)
			
		}else{
			alert(this.state.msg)
		}
    }
  render() {
	let {match,history,location} = this.props
    return (
      <React.Fragment>
        <header className="mui-bar mui-bar-nav aui-header b-line">
		<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left" onClick={()=>{
		history.go(-1)
	}} ></a>
          <h1 className="mui-title">登录</h1>
        </header>
        <div className="mui-content">
          <div className="devider b-line" />
          <form className="mui-input-group">
            <div className="mui-input-row b-line">
              <label>用户名：</label>
              <input type="text" placeholder="请输入您的用户名" onChange={this.userChange} />
            </div>
            <div className="mui-input-row b-line">
              <label>密码：</label>
              <input
                type="password"
                className="mui-input-clear"
                placeholder="请输入您的密码"
				data-input-clear="5"
				onChange={this.passChange}
              />
              <span className="mui-icon mui-icon-clear mui-hidden" />
            </div>
            <div
              className="mui-button-row"
              style={{
                paddingTop: "20px",
                paddingBottom: "10px",
                height: "auto"
              }}
            >
              <a
                type="button"
                className="mui-btn mui-btn-primary"
                onClick={this.login.bind(this)}
                style={{ width: "90%", padding: "10px 0" }}
              >
                立即登录
              </a>
            </div>
            <div
              style={{
                paddingBottom: "10px",
                textAlign: "right",
                paddingRight: "15px"
              }}
            >
              <Link to="/register">注册账号</Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
