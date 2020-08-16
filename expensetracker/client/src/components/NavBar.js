import React from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';
// import Router from '../router/route'
// import history from './history';

function NavBar(props) {
    // const {history} = props;
    // console.log(useHistory)
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const {name} = e.target;
        if(name==="signup"){

           history.push('/signup');
        }
        else if(name==="signin"){
            history.push('/signin');
        }
        else{
            history.push('/');
        }

    }
    return (
            <nav className = "topnav">
         <h1 className = "heading">Pocket Tracky</h1>
            <div className = "nav-right">
            <a href="/signup" >login</a>
           <button className = "inner" onClick = {handleSubmit} name = "signup">SignUp</button>
           <button className = "inner" onClick = {handleSubmit} name = "signin">SignIn</button>
            </div>
        
            
        </nav>
    )
}

export default NavBar
