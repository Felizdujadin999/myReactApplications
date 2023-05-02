import React from "react";
import '../style/Cycle.css';
import {useNavigate} from 'react-router-dom';

function Cycle(){
    const Navigate = useNavigate();

    return(
        <div className="maincontainer">
            <div id="top">
            <div className="topic">
                <p><span>YOUR_CYCLE 🩸</span></p>
            </div>
            <li>
                <a href="https://www.always.com/en-us/tips-and-advice/your-first-period/10-common-period-questions"><p>FAQ</p></a>
            </li>
            <li>
                <a href="https://semicolon.africa"><p>About Us</p></a>
            </li>
            <li>
            <a href="https://www.freecodecamp.org"><p>Contact Us</p></a>
                
            </li>
            <li>
                <p>Sign Up</p>
            </li>
            <li>
                <p id="signIn">Sign In</p>
            </li>
            </div><br/><br/><br/>
        
            <div className="secondcontainer"><br/><br/><br/><br/><br/>
                <div className="barone">
                    <div className="p" onClick={()=>{Navigate("/TrackPeriod")}}>TRACK NEXT PERIOD</div>
                </div><br/><br/>

                <div className="barone">
                <div className="p">CHECK OVULATION</div>
                </div><br/><br/>

                <div className="barone">
                <div className="p"  >CHECK FREE PERIOD</div>
               <var></var> </div>
            </div><br/>

            <button id="backButton" onClick={()=>{Navigate("/FrontPage")}}>BACK</button>
        </div>
    )
}
export default Cycle