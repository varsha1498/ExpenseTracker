import NavBar from './NavBar';
// import Signup from './Signup'
import React, { Component } from 'react'
// import Router from '../router/route'
import './Home.css';
// import { Router } from 'react-router-dom';

export default class Home extends Component {

    render(){
        return (
            <>
             <div className="home">
                <NavBar history={this.props.history} /> 
               <p className = "impact"> Your personal Expense tracker where you can maintain monthly income and expenses</p>
            </div>
            </>
            

            
               
           
            
        )
    }
}

