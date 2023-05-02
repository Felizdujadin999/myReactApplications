import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByOne, incrementByValue, decrementByOne, decrementByValue, setInput} from "../../../store/CounterSlice";

function CounterComponent() {
    const count = useSelector((state) => state.counter.count);
    const value = useSelector((state) => state.counter.input)
    const dispatch = useDispatch();

    return(
        <div>
            <p>Count:: {count}</p>
            <button onClick={() => dispatch(incrementByOne())}>Increment By one</button><br/><br/>
            <button onClick={() => dispatch(decrementByOne())}>Decrement By one</button><br/><br/>
            {/* <input type ="number" name ="count" id ="fName" value ={value} 
            onChange ={(e) => dispatch(setInput(Number(e.target.value)))}/> <br/><br/>

            <button onClick={() => dispatch(incrementByValue())}>increment by value</button><br/><br/>

            <button onClick={() => dispatch(decrementByValue())}>decrement by value</button> */}

            <input id="number" type="number"/><br/><br/>
            <button onClick={() => dispatch(incrementByValue(document.getElementById("number").valueAsNumber))}>increment by value</button>
            <button onClick={() => dispatch(decrementByValue(document.getElementById("number").valueAsNumber))}>decrement by value</button>

        </div>
    )
}

export default CounterComponent;