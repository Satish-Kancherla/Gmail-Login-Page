import { NavLink } from "react-router-dom";
import google from "../google-logo.png";
import { useState } from "react";



const Create = () => {

    const [data,setData]=useState({firstname:"",lastname:""});
    const [error,setError]=useState(false);

    let name,value;
    const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setData({...data,[name]:value});
    }

    const handleButton=(e)=>{
        e.preventDefault();
        if(data.firstname.length===0||data.lastname.length===0){
            setError(true);
        }  
    }

    return ( 
        <div className="signup-container">
            <form onClick={handleButton}>
                <div className="signup-content">
                <img src={google} alt=""/>
                    <h2>Create a Google Account</h2>
                    <h3>Enter your name</h3>
                    <div className="create-data">
                        <input type="text" name="firstname" placeholder="First name" value={data.firstname} onChange={handleInput} size={35} required/>
                    </div>
                    {error && data.firstname.length<=0 ? <label>FirstName can't be empty</label>: " "}
                    <div className="create-data">
                        <input type="text" name="lastname" placeholder="Last name (optional)" value={data.lastname} onChange={handleInput} size={35} required/>
                    </div>
                    {error && data.lastname.length<=0 ? <label>LastName can't be empty</label>: " "}
                </div>
                <div className="create-button ">
                    <NavLink to="/basic"><button >Next</button></NavLink>
                </div>
            </form>
            </div>
            
     );
}
 
export default Create;