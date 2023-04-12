import React from "react";
import '../style/topNav.css';
import LoginSVG from '../../../assets/image/login.svg';
import PictureOne from '../../../assets/image/pic.svg';
import PictureTwo from '../../../assets/image/pic1.svg';
import PictureThree from '../../../assets/image/small.svg';
import PictureFour from '../../../assets/image/tripic.svg';
import PictureFive from '../../../assets/image/small2.svg';
import PictureSix from '../../../assets/image/small3.svg';
import PictureSeven from '../../../assets/image/minipic1.svg';
import PictureEight from '../../../assets/image/arrow.svg';
import PictureNine from '../../../assets/image/minipic3.svg';
import PictureTen from '../../../assets/image/minipic4.svg';
import PictureEleven from '../../../assets/image/minipic5.svg';

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
        {/*
        <div class="image">
            <img src={PictureOne} alt="fav"/>
        </div>
        
        <div class="image2">
                <img src={PictureTwo} alt="fav"/> 
        </div> 
      
        <div class="thirdContainer">
                  <h2>LIST. SELL. GROW</h2>
        </div>
          
        <div class="img1">
            <img src={PictureThree} alt="Get"/>
          </div>

          <div class="img2"> 
            <img src={PictureFive} alt="fav"/>
          </div>

          <div class="img3">
            <img src={PictureSix} alt="fav"/>
          </div>
          <div class="img4">
            <img src={PictureFour} alt="fav"/>
          </div>

           
          <div class="alternativeContainer">
            <div class="cont">
                <div class="style">
                    <h2>Your Channel Program <br/> On Steroids</h2>
                    <h3>Tired of finding MSPs that can help you boost your <br/>
                        channel sales? you're in luck, because they're all here.</h3>
                      </div>  
                <img src={PictureSeven} alt="fav"/>              
          </div>
            
          <div class="cont">
                <div class="picture"><img src="../assets/minipic2.svg" alt="fav"/></div>
            
                <div class="write-up">
                    <h2>Become the vendor <br/> everyone wants to buy from</h2>
                    <h3>Gain brand authority and visibility with the help of the<br/>
                        largest IT service ecosystem. Find customers who are <br/>
                        looking for your solution right now!</h3><br/>
                        <img src={PictureEight} alt="fav"/>
                </div>
          </div>
           
            <div class="cont">
                <div class="write-up2">
                    <h2>It's like having your best <br/> salesman on autopilot</h2>
                    <h3>Share collaterals and documents that are automatically branded.<br/> Leverage a rich
                        partner network that sells your solution exactly <br/> the way your best salesman would.</h3>
                </div>
                <div class="imagery"><img src={PictureNine} alt="search"/></div>              
            </div>

            <div class="cont">
                <div class="imagery"><img src={PictureTen} alt="search"/></div> 
                <div class="write-up3">
                    <h2>Track your channel performance</h2>
                    <h3>Monitor the health and revenue of your channel <br/> 
                        program and streamline your campaign to win more <br/>
                        customers within regnos.</h3>
                </div>               
            </div>

                
            <div class="cont">
                <div class="write-up4">
                    <h2>Get the best version of your sales playbook</h2>
                    <h3>Gather insights about top channel sellers and find <br/>
                        out which pitch and collaterals ensure maximum <br/>
                        profitability. Win happy customers with an <br/>
                        optimized sales playbook.</h3>
                </div>
                <div class="imagery"><img src={PictureEleven} alt="search"/></div>                 
            </div>

          </div>

             

          

            <div class="ninthContainer"> 
                <div class="innerNinth">
                    <div class="firstSide">
                        <h3>Product</h3>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Integrations</p>
                        <p>Product</p>
                    </div>
                    <div class="secondSide">
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Submit a ticket</p>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                    </div> 
                    <div class="thirdSide">
                        <h3>Users</h3>
                        <p>Login</p>
                        <p>Get a demo</p>
                        <p>Talk to us</p>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="fourthSide">
                        <h3>Guides</h3>
                        <p>MSP</p>
                        <p>MSP sales</p>
                    </div>
                    <div class="fifthSide">
                        <h3>Contact us</h3>
                        <p>Address</p>
                    </div>
                </div>
            <p style="color: white;">&copy; 2023 Regnos Inc. All rights reserved</p>
            <p style="color: white;">Follow us on social media</p>

            </div>
            */}
    </div> 
    
        )
    }

}

export default TopNav;