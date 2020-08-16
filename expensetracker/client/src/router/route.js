import React from "react";
// import ReactDOM from "react-dom";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from "../components/Signup";
import history from "../components/history";
import Home from "../components/Home"
import Signin from "../components/Signin";

export default function route() {
  return (
    <div>
      <Switch>

      <Route exact path="/" component = {Home}/> 
    

        <Route path="/signin" component = {Signin} /> 
      

        <Route exact path="/signup" component = {Signup} />
       
 
      </Switch>

    </div>
  );
}
