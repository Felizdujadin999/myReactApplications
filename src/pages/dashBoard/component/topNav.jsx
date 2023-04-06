import React from "react";
import '../style/topNav.css';
import LoginSVG from '../../../assets/image/login.svg';

class TopNav extends React.Component{
    // constructor(){
    //     super();
    // }

    render(){
        return (
            <div className="topNav">
            <div className="ptag">
                <h2 className="logo">REGNOS WEBSITE</h2>
            </div>
            <nav>
                <li><a href="https://google.com" style={{color: 'lightblue'}} className="names1">Features</a></li>
                <li><a href="https://semicolon.africa" style={{color: 'lightblue'}} className="names2">Integration</a></li>
                <li><a href="https://github.com" style={{color: 'lightblue'}} className="names3">Pricing</a></li>
                <li><a href="https://jw.org" style={{color: 'lightblue'}} className="names4">Company</a></li>
                <li><a href="https://www.freecodecamp.org" style={{color: 'lightblue'}} className="names5">Blog</a></li>
                <div className="getDemo">
                    <p className="demo">Get a demo</p>
                </div>
                <div className="login">
                    <img src= {LoginSVG} height="20px" alt="fav"/>
                    <a className="ptag_login" style={{color: 'lightblue'}} href="https://semicolon.africa">Login</a>
                </div>
            </nav>
            
            
        {/* <div class="secondContainer" >
            <div >
                <h2 class="wa">FIND THE RIGHT PARTNERS TO <br/> 
                    FUEL YOUR BUSINESS GROWTH</h2>
                <h7 style="font-size: 70%">join a vibrant community of MsPs to forge long-lasting relationships with partners <br/>
                    that help you create excellent customer experirnces</h7>
                <button style="font-style: italic;">Register today</button>
            </div>
        </div> */}

        </div>
        )
    }

}

export default TopNav