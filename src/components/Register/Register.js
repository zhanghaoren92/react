import React, { Component } from "react";
import "./assets/css/register.css";
import {Route,Link,NavLink,Switch,Redirect} from 'react-router-dom'

export default class Register extends Component {

	state={
		username:'',
		password:'',
		confirmPassword:'',
		email:'',
		msg:'请把信息输入完整'
	}

	reg(){
		let params = new URLSearchParams();
		params.append("u_name",this.state.username);
		params.append("u_password",this.state.password);
		params.append("u_email",this.state.email);
		
		if(this.state.email && this.state.username && this.state.password && this.state.confirmPassword){
			fetch(
				'/app/register/',
				{
					method:'POST',
					// headers:{"Content-type":"application/x-www-form-urlencoded"},
					body:params//|URLSearchPrams|{}???
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
						this.props.history.push({pathname:'/login'})
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
	confirmChange = ev => (
		this.setState({
			confirmPassword:ev.target.value
		})
	)
	emailChange = ev => (
		this.setState({
			email:ev.target.value
		})
	)


  render() {
	let {match,history,location} = this.props	
    return (
      <React.Fragment>
        <header className="mui-bar mui-bar-nav aui-header b-line">
		<a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left" onClick={()=>{
		history.go(-1)
	}} ></a>
          <h1 className="mui-title">注册</h1>
          <a className="mui-icon mui-icon-paperplane mui-pull-right" />
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
            <div className="mui-input-row b-line">
              <label>确认密码：</label>
              <input type="password" onChange={this.confirmChange} placeholder="请再次输入您的密码" />
            </div>
            <div className="mui-input-row b-line">
              <label>邮箱：</label>
              <input
                type="text"
                className="mui-input-clear"
                placeholder="请输入您的邮箱"
				data-input-clear="5"
				onChange={this.emailChange}
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
				style={{ width: "90%", padding: "10px 0" }}
				onClick={this.reg.bind(this)}
              >
                立即注册
              </a>
            </div>
            <div
              style={{
                paddingBottom: "10px",
                textAlign: "right",
                paddingRight: "15px"
              }}
            >
              <Link to="/login">已有账号? 登录</Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
