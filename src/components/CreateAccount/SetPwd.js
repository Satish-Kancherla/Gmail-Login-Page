import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import google from "../google-logo.png";


const SetPwd = () => {

    const[showPassword,setShowPassword]=useState(false);
    const handleShow=()=>{
        setShowPassword(!showPassword);
    }

  return (
    <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>Create a strong password</h2>
                <h3>Create a strong password with a mix of letters, numbers and symbols</h3>
                <div className="sign-data">
                    <input type={showPassword ? "text" : "password"}  placeholder="Password" size={35}/>
                </div>
                <div className="pwd-data">
                    <input type={showPassword ? "text" : "password"}  placeholder="Confirm" size={35}/>
                </div>
                <div className="password-checkbox">
                        <input type="checkbox"  onClick={handleShow} /><label >Show Password</label>
                    </div>
                <div className="password-button">
                    <NavLink to="/"><button>Next</button></NavLink>
                </div>
                </div>
            </form>
        </div>
  )
}

export default SetPwd