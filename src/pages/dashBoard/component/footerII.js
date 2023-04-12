import React from "react";
class FooterII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            height: 0.0
        }
    }

    handleFirstName=(event)=>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName=(event)=>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleAge=(event)=>{
        this.setState({
            age: event.target.value
        })
    }
    handleHeight=(event)=>{
        this.setState({
            height: event.target.value
        })
    }

    render(){
        return(
           <div className="container">
            {/* <div class="secondContainer" >
            <div >
                <h2 class="wa">FIND THE RIGHT PARTNERS TO <br/> 
                    FUEL YOUR BUSINESS GROWTH</h2>
                <h7 style="font-size: 70%">join a vibrant community of MsPs to forge long-lasting relationships with partners <br/>
                    that help you create excellent customer experirnces</h7>
                <button style="font-style: italic;">Register today</button>
            </div>
        </div> */}
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
                        <label htmlFor="firstName" className="fName">
                         firstName: <input type="text" placeholder="Enter your first name" name="firstName" id="firstName"
                         value={this.state.firstName} onChange={this.handleFirstName}/>
                        </label><br /><br />

                        <label htmlFor="lastName" className="lName">
                        LastName: <input type="text" placeholder="Enter your last name" name="lastName" id="lastName"
                        value={this.state.lastName} onChange={this.handleLastName}/>
                        </label><br/><br/>
            
                        <label htmlFor="age" className="age">
                        Age: <input type="text" placeholder="Enter your age" name="age" id="age" 
                        value={this.state.age} onChange={this.handleAge}/>
                        </label><br/><br/>

                        <label htmlFor="height" className="height">
                        Height: <input type="text" placeholder="Enter your height" name="height" id="height"
                        value={this.state.height} onChange={this.handleHeight}/>
                        </label> <br/><br/>
                        <button type="submit">Submit</button>
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
            <p style={{color: 'white'}}>&copy; 2023 Regnos Inc. All rights reserved</p>
            <p style={{color: 'white'}}>Follow us on social media</p>

            </div>


            <p className="fName">My first name is: {this.state.firstName}</p>
            <p className="lName">My last name is: {this.state.lastName}</p>
            <p className="age">My age is: {this.state.age}</p>
            <p className="height">My height is: {this.state.height}</p>
           </div>
        )
    }
}

export default FooterII;