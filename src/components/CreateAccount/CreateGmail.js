import { NavLink } from "react-router-dom";
import google from "../google-logo.png";

const ChooseGmail = () => {
    return ( 
<div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>Create your email</h2>
                <h3>Create your own Gmail address</h3>
                <div className="sign-data">
                    <input type="email" placeholder="Create your Gmail address" size={35}/>
                </div>
                <div className="forget-button">
                    <NavLink to="/setpwd"><button>Next</button></NavLink>
                </div>
                </div>
            </form>
        </div>

       
);}    
        export default ChooseGmail;