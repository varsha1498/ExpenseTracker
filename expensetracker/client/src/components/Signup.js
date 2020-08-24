import React, { useState } from 'react'
import './signup.css'
import history from './history';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [dob, setdob] = useState("");
   const [profession, setProfession] = useState("");
   const history = useHistory();

   const sendData = async (obj) => {
     try{
      const config = {
        'Config-Type' : 'application/json'
      }
  
      const res = await axios.post("http://localhost:5000/signup",obj, config);
    
     }
     catch(err){
       console.log(err);
       console.log("i am getting error")
     }
    
   }
   const submit = (e) =>{
     e.preventDefault();
    const obj = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      profession: profession
    }
    sendData(obj);

    setName("");
    setPassword("");
    setEmail("");
    setdob("");
    setProfession("");
    //history.push("/signin");

   }
  //  console.log("i am signup")
    return (
        < div className = "Signup-container">
            <form className = "signup-form" onSubmit = {(e) => submit(e)}>
              <h1>CREATE YOUR ACCOUNT AND ENJOY!</h1><br/>
          <b>Name:</b> 
    	  <input 
          type="text" 
          value = {name}
          placeholder="Enter Name" 
          onChange = {(e)=>setName(e.target.value)}
          required 
        />
        <br/>
        <b>Email:</b>  
        <input 
          type="text" 
          value = {email}
          placeholder="Enter email" 
          onChange = {(e)=>setEmail(e.target.value)}
          required 
        />
        <br/>
        <b>Password: </b>
        <input 
          type="password" 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title = "e.g. Must contain a capital letter, a number and a special character "
          value = {password}
          placeholder="Enter password" 
          onChange = {(e)=>setPassword(e.target.value)}
          required 
        />
        <br/>
        <b>Date of Birth: </b>
        <input 
          type="Date"  
          value = {dob}
          onChange = {(e)=>setdob(e.target.value)}
          required 
        />
        <br/>
        <b>Profession:</b>
        <input 
          type="text" 
          placeholder="Enter Profession" 
          value = {profession}
          onChange = {(e)=>setProfession(e.target.value)}
          required 
        />
        <br/>
        <button className="button">Let's Go</button>
    	</form>
        </div>
    )
}
