import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';





 
import 'swiper/dist/css/swiper.min.css'
//全局资源的配置css
import './assets/css/mui.min.css';
import './assets/css/home.css';
import './assets/css/icons-extra.css';
import './assets/css/app.css';
import './assets/css/feedback.css';

//暴露全局 baseUrl
import config from './config'
window.baseUrl = config.baseUrl.localhost;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
, document.querySelector('#root'));


