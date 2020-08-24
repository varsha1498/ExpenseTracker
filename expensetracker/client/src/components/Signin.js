
import React, {useState, useContext, useEffect} from "react";
import './signin.css'
import {useHistory} from 'react-router-dom';
import axios from 'axios';



 const Signin = () => {
  
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(""); 

 function settedEmail(email1, name){
  sessionStorage.setItem("Email", email1);
  sessionStorage.setItem("Name", name);
 }



  const history = useHistory();


  const sendData = async (obj) => {
    try{
     const config = {
       'Config-Type' : 'application/json'
     }
     const res = await axios.post("http://localhost:5000/signin",obj, config);
     const userID = res.data.user._id;
     const {isLoggedIn} = await res.data;
     const {name} = await res.data.user;
     console.log(res.data.user.name);
     if(isLoggedIn){
       history.push('/expensetracker');
       settedEmail(email, name);
     }
     else{
      history.push('/signin');
     }
     
    }
    catch(err){
      // console.log(res);
      console.log(err.response.data);
      setError(err.response.data.error);
      console.log("i am getting error")
    }
   
  }

  const Submit = (e) => 
{  
  e.preventDefault();
  const obj = {
    email: email,
    password: password
  }
  console.log(obj);
  sendData(obj);
  setEmail("");
  setPassword("");
  setError("");
}

  return (
  
  <div className = "login-container">
    
    <form className = "login-form" onSubmit = {(e)=>Submit(e)}>
    <h1>Sign in to your pocket expense tracker</h1>
  <label htmlFor="email"><b>Email</b></label>
  <input type="text" placeholder="Enter Email" name="email" value={email} onChange = {(e)=>setEmail(e.target.value)}
  title = "e.g. abc@xyz.com"
   required />

  <label htmlFor="password"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="password" value = {password}  onChange = {(e)=>setPassword(e.target.value)}  
   required />
    
  <button className = "button" type="submit">Login</button>
  {error && <div>{error}
    </div>}


  </form>
  </div>
  
  );
}

export default Signin;