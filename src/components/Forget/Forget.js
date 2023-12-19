import { NavLink } from "react-router-dom";
import google from "../google-logo.png";

const Forget = () => {
    return ( 
        <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>Find your email</h2>
                <h3>Enter your phone number or recovery email</h3>
                <div className="sign-data">
                    <input type="text" placeholder="Email or phone" size={35}/>
                </div>
                <div className="forget-button">
                  <NavLink to="/details">  <button>Next</button></NavLink>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default Forget;