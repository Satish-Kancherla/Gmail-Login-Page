const ResetPassword = () => {
    return ( 
        <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>E</h2>
                <h3>Enter your phone number or recovery email</h3>
                <div className="sign-data">
                    <input type="text" placeholder="Email or phone" size={35}/>
                </div>
                <div className="forget-button">
                    <button>Next</button>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default ResetPassword;