import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Classwork(){
    const Navigate = useNavigate();

    const [number, setNumber] = useState(0)

    function Increament(){
        setNumber(number+1);
    }

    function Decreament(){
        setNumber(number-1);
    }

    function handleChange(event){
       if(event.target.name === "firstNumber"){
            setNumber(document.getElementById("fNum").valueAsNumber + number);
       }
       else if (event.target.name === "secondNumber"){
        setNumber(number-document.getElementById("sNum").valueAsNumber)
       }
    }

    return(
        <React.Fragment>
            <div>
                Number: {number}
            </div>
            <button onClick={Increament}>Increament</button> <br/>
            <button onClick={Decreament}>Decreament</button> <br/>

            <label htmlFor="fNum">
            Increament value by input: <input type="number" name="firstNumber" id="fNum" placeholder='enter a number'/>
            <button name="firstNumber" onClick={handleChange}>Enter</button>
            </label><br/>
            <label htmlFor="sNum">
            Decreament value by input: <input type="number" name="secondNumber" id="sNum" placeholder='enter a number'/>
            <button name="secondNumber" onClick={handleChange}>Enter</button>
            </label><br/>
            <button onClick={()=>{Navigate("/tictactoe")}}>Move to the next page</button>
        </React.Fragment>
    )
}
