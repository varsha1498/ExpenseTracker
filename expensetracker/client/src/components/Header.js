import React from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom';

 const Header = () => {
  const history = useHistory();
  function handleClick(){
    
    history.push("/expensetracker/profile");
  }
    return (
        <div className = "top">
            <h2>
            Budget Tracker
          </h2>

          <button className = "profile-btn" onClick = {handleClick}>My Profile</button>
          
        </div>
        

    )
}

export default Header;