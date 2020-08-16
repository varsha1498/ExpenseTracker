
import React, {useState} from "react";

import './signin.css'
// import { useForm } from "react-hook-form";

 const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const { handleSubmit, register, errors } = useForm();

  // const handleChange = (e) =>{
  // //  const {name, value} = e.target;
  // //  if(name==="email"){
  // //   setEmail(value);
  // //  }
  // //  else if(name==="password"){
  // //   setPassword(value);
  // //  }
  // console.log(e);
  // }

  const Submit = (e) => 
{  
  e.preventDefault();
  setEmail("");
  setPassword("");
 
  console.log("form submitted");
}

  return (

  <div className = "login-container">
    
    <form onSubmit = {(e)=>Submit(e)}>
    <h1>Sign in to your pocket expense tracker</h1>
  <label for="email"><b>Email</b></label>
  <input type="text" placeholder="Enter Email" name="email" value={email} onChange = {(e)=>setEmail(e.target.email)}
  title = "e.g. abc@xyz.com"
   required />

  <label for="password"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="password" value = {password}  onChange = {(e)=>setPassword(e.target.password)} 
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
    
  <button type="submit">Login</button>
    <a href="/" >Login</a>


  </form>
  </div>
  
  );
}

export default Signin;