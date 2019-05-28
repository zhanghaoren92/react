import React,{Component} from 'react';
import "./assets/css/header.css";
import {Route,Redirect,Switch,Link} from 'react-router-dom'

export default class Header extends Component{
    render(){
        return (
                <header className="mui-bar mui-bar-nav aui-header b-line">
                    <Link className=" mui-icon mui-icon-search mui-pull-left" to="/search"></Link>
                    <h1 className="mui-title">海淘购</h1>
                    <a className=" mui-icon mui-icon-chatbubble mui-pull-right" href="dope.html"></a>
                </header>  
        )
    }
}