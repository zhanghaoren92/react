import React,{Component} from 'react';




const Header1 = (props) => (
  <header className="mui-bar mui-bar-nav aui-header b-line">
    <a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left" onClick={()=>{
        props.history.go(-1)
      }} ></a>
      <h1 className="mui-title">{props.title}</h1>
      <a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
  </header>
)

export default Header1;