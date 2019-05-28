import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/base.css';//全局资源引入
import './assets/css/common.css';
import './assets/css/menu_sideslide.css';
import './assets/css/order.css';

import {BrowserRouter,Route} from "react-router-dom";

import store from './store';
import {Provider} from 'react-redux';


import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}></Route>
        </BrowserRouter>
    </Provider>
    
   ,
     document.getElementById('root')
);
