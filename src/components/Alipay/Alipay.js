import React,{Component} from 'react';
import './assets/css/alipay.css';

export default class Alipay extends Component{
    render(){
        return (
            <React.Fragment>
                <header className="mui-bar mui-bar-nav aui-header b-line">
                    <a className="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
                    <h1 className="mui-title">支付方式</h1>
                    <a className="mui-icon mui-icon-paperplane mui-pull-right"></a>
                </header>
                <div className="mui-content">


                    <div className="mui-card">
                        <form className="mui-input-group">
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon mui-icon-weixin" style={{color:"#57dc0f"}}></span>微信</label>
                                <input name="radio1" type="radio"/>
                            </div>
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon mui-icon-qq" style={{color:"#1296db"}}></span>腾讯钱包</label>
                                <input name="radio1" type="radio"/>
                            </div>
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon-extra mui-icon-extra-card" style={{color:"#d81e06"}}></span>银行卡</label>
                                <input name="radio1" type="radio"/>
                            </div>
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon-extra mui-icon-extra-alipay" style={{color:"#1296db"}}></span>支付宝</label>
                                <input name="radio1" type="radio"/>
                            </div>
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon-extra mui-icon-extra-prech" style={{color:"#d81e06"}}></span>海淘币</label>
                                <input name="radio1" type="radio"/>
                            </div>
                            <div className="mui-input-row mui-radio b-line">
                                <label><span className="mui-icon-extra mui-icon-extra-gold" style={{color:"#ddd"}}></span>余额 (可用余额为 0)</label>
                                <input name="radio1" type="radio" disabled/>
                            </div>
                        </form>
                    </div>


                </div>

                <div style={{height:"49px"}}></div>
                <nav className="mui-bar mui-bar-tab" >
                    <div className="t-line aui-on-cell">
                        <div className="aui-onc">
                            <p style={{display:"inline-block"}}><span style={{color:"#fb4545"}}>支付：¥112.50 </span></p>
                            <a href="#" className="aui-got" style={{padding:"0 54px"}}>付款</a>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}