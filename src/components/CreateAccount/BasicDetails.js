import { NavLink } from "react-router-dom";
import google from "../google-logo.png";

const Basic = () => {
    return ( 
        <div className="signup-container">
            <form>
                <div className="signup-content">
                <img src={google} alt=""/>
                <h2>Basic information</h2>
                <h3>Enter your birthday and gender</h3>
                <div className="signup-rows">
                
                        <select className='date' name="date"  >
                            <option >Date</option>
                            <option >01</option><option >02</option><option >03</option><option >04</option><option >05</option>
                            <option >06</option><option >07</option><option >08</option><option >09</option><option >10</option>
                            <option >11</option><option >12</option><option >13</option><option >15</option>
                            <option >16</option><option >17</option><option >18</option><option >19</option><option >20</option>
                            <option >21</option><option >22</option><option >23</option><option >24</option><option >25</option>
                            <option >26</option><option >27</option><option >28</option><option >29</option>
                            <option >30</option><option >31</option>
                        </select>
                        <select className='month' name="month"   >
                        <option >Month</option>
                            <option value="jan">Jan</option><option value="Feb">Feb</option><option value="Mar">Mar</option><option value="Apr">Apr</option>
                            <option value="May">May</option><option value="jun">Jun</option><option value="Jul">Jul</option><option value="Aug">Jan</option>
                            <option value="Sep">Sep</option><option value="Oct">Oct</option><option value="Nov">Nov</option><option value="Dec">Dec</option>
                        </select>
                        <select className='year' name="year"   >
                        <option >Year</option>
                            <option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1992">1992</option><option value="1993">1993</option>
                            <option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option>
                            <option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option>
                        </select>
                        </div><div>

                        <select className='gender' name="gender"   >
                        <option >Gender</option>
                        <option value="Male">Male</option><option value="Female">Female</option>
                        <option value="Rather not say">Rather not say</option><option value="Custom">Custom</option>
                        </select>
                     </div>
                <div className="bday">
                    <a href="https://support.google.com/accounts/answer/1733224?hl=en" rel="noreferrer" target="_blank">Why we ask for birthday and gender</a>
                </div>
                <div className="forget-button">
                    <NavLink to="/choose"><button>Next</button></NavLink>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default Basic;