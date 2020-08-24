import React from 'react';
import './Navbar.css';
import {useHistory} from 'react-router-dom';


function NavBar(props) {

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
         <div className = "heading">
            <img src = "/logoImg.png" height = "80px" width = "100%"/>
         </div>
            <div className = "nav-right">

           <button className = "inner" onClick = {handleSubmit} name = "signup">SignUp</button>
           <button className = "inner" onClick = {handleSubmit} name = "signin">SignIn</button>
            </div>
        
            
        </nav>
    )
}

export default NavBar
