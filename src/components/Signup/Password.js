import { useState } from "react";
import { NavLink } from "react-router-dom";
import google from "../google-logo.png";

const Password = () => {

    const[showPassword,setShowPassword]=useState(false);
    const handleShow=()=>{
        setShowPassword(!showPassword);
    }

    return ( 
        <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                    <h2>Welcome</h2>
                    <h3>to continue to Gmail</h3>
                    <div className="sign-data">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" size={35}/>
                    </div>
                    <div className="password-checkbox">
                        <input type="checkbox"  onClick={handleShow} /><label >Show Password</label>
                    </div>
                    <div className="password-button">
                          <NavLink to="/welcome">  <button>Next</button></NavLink>
                        </div>
                </div>
            </form>
        </div>
     );
}
 
export default Password;