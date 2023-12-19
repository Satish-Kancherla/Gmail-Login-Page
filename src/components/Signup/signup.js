import { NavLink } from "react-router-dom";
import google from "../google-logo.png";


const Signup = () => {
    return ( 
        <div className="signup-container">
            <form>
                <div className="signup-content">
                    <img src={google} alt=""/>
                    <h2>Sign in</h2>
                    <h3>to continue to Gmail</h3>
                    <div className="sign-data">
                        <input type="text" placeholder="Email or phone" size={35} required/>
                    </div>
                    <div className="forget">
                        <NavLink to="/forget">Forget email?</NavLink>
                    </div>
                    <div className="sign-p" >
                        <p>Not your computer? Use Guest mode to sign in privately. <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB"  rel="noreferrer" target="_blank">Learn more</a></p>  
                    </div>
                    <div className="signup-footer">
                        <div className="account">
                           <NavLink to="/create">Create account</NavLink>
                        </div>
                        <div className="sign-button">
                            <NavLink to="/password"> <button>Next</button></NavLink>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
     );
}
 
export default Signup;