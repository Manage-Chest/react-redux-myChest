import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import ClothList from './containers/ClothList';
import reducer from "./reducers/index";
import clothes from "./middlewares/clothes-middleware";

import Home from "./components/Home";
import RegisterAndLogin from './containers/RegisterAndLogin';
import MatchList from './containers/matchList'
import RegisterLogin from './middlewares/register-login';
import ImageUpload from './middlewares/image-upload'

import login from './middlewares/login';
import register from './middlewares/register';


import matchList from "./middlewares/matchList"

const createStoreWithMiddleware = applyMiddleware(clothes,RegisterLogin,register,login,matchList,ImageUpload)(createStore);
import ClothForm from './containers/ClothForm'


const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="RegisterAndLogin" component={RegisterAndLogin}/>
        <Route path="ClothList" component={ClothList}/>
        <Router path="LoginAndRegister" component={MatchList}/>
        <Route path="ClothForm" component={ClothForm}/>

    </Route>
    </Router>
  </Provider>, document.getElementById('app'));
