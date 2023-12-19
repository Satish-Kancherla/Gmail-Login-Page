import { NavLink } from "react-router-dom";
import g1 from "../gmail2.png";

const WelcomePage = () => {
    return ( 
        <div className="welcome">
            <NavLink to="/"> <img src={g1} alt=""  /></NavLink>
            
        </div>
     );
}
 
export default WelcomePage;