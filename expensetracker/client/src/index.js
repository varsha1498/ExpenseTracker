import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './components/Home'
// import Signin from './components/Signin';
// import { Router } from 'express';
// import Signin from './components/Signin'
import Router from './router/route'
import Signup from './components/Signup';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
 
,
  document.getElementById('root')
);


