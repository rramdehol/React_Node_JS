import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from "react-router"


ReactDOM.render(
  <Router history = {hashHistory}>
  	<Router path = "/movie" component={App}/>
  	<Router path = "/:moive ">
  </Router>
  document.getElementById('root')
);
