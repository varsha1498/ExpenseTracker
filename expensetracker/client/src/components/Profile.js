

import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './profile.css'

export default function Profile() {

    const history = useHistory();
    const email = sessionStorage.getItem("Email");
    const name = sessionStorage.getItem("Name");
    const handleClick = (e) =>{
        e.preventDefault();
        sessionStorage.clear();
        history.push("/");
    }

        return (
            <div className = "profile">
                <div className = "contents">
                <h1>Hello, {name}</h1>
                <h2>Email ID: {email}</h2>
                <button className = "logout" onClick = {(e) => handleClick(e)}>Log Out</button>
                </div>
                
            </div>
        );
    
}
