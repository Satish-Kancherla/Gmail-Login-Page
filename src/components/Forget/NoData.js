import React from 'react';
import google from "../google-logo.png";
import { NavLink } from 'react-router-dom';

const NoData = () => {
  return (
    <div className="signup-container">
    <form>
        <div className="signup-content">
        <img src={google} alt=""/>
        <h2>No account found</h2>
        <h3>There’s no Google Account with the info you provided.</h3>
        
        <div className="forget-button">
           <NavLink to="/forget"> <button>Try again</button></NavLink>
        </div>
        </div>
    </form>
</div>
  )
}

export default NoData