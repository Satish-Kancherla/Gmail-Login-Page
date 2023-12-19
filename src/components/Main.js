import { Route, Routes } from "react-router-dom";
import Signup from "./Signup/signup";
import Forget from "./Forget/Forget";
import Create from "./CreateAccount/Create";
import Password from "./Signup/Password";
import WelcomePage from "./Signup/Welcome";
import Basic from "./CreateAccount/BasicDetails";
import ChooseGmail from "./CreateAccount/CreateGmail";
import SetPwd from "./CreateAccount/SetPwd";
import Details from "./Forget/Details";
import NoData from "./Forget/NoData";


const Main = () => {
    return ( 
        <div>
        <Routes>
            <Route path="/" element={<Signup />}/>
            <Route path="/forget" element={<Forget />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/password" element={<Password  />}/>
            <Route path="/welcome" element={<WelcomePage />}/>
            <Route path="/basic" element={<Basic />}/>
            <Route path="/choose" element={<ChooseGmail />}/>
            <Route path="/setpwd" element={<SetPwd />}/>
            <Route path="/details" element={<Details />}/>
            <Route path="/nodata" element={<NoData />}/>
         </Routes>
        </div>
     );
}
 
export default Main;