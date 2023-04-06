import React, { Component } from "react";

class Hero extends Component{
    render(){
       return (
       <div
        style={{
            backgroundColor: "red",
            color: 'yellow',
            fontSize: '20px',
            fontWeight: 700,
            fontStyle: 'italic'     
        }}
       >
        Hi Hero</div>
       )
    }
}

export default Hero