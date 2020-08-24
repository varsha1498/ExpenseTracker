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
               <div className = "impact"> Your personal Budget tracker where you can maintain monthly income and expenses
                 <ul>
                    <li>Add transactions</li>
                    <li>Remove transactions</li>
                    <li>Get Income and expenses value</li>
                    <li>Keep a track of your Balance</li>
                </ul>
             </div>
            </div>
            </>
            

            
               
           
            
        )
    }
}

