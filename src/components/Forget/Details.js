import React from 'react'
import google from "../google-logo.png";
import { NavLink } from 'react-router-dom';

const Details = () => {
  return (
    <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>What’s your name?</h2>
                <h3>Enter the name on your Google Account</h3>
                <div className="sign-data">
                    <input type="text" placeholder="First name" size={35}/>
                </div>
                <div className="pwd-data">
                    <input type="text" placeholder="Last name (optional)" size={35}/>
                </div>
                <div className="forget-button">
                   <NavLink to="/nodata"> <button>Next</button></NavLink>
                </div>
                </div>
            </form>
        </div>
  )
}

export default Details