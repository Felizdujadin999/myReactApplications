import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CounterComponentTwo(){
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)

    return(
        <div>
            <p>Count:: {count}</p>
            <button onClick={() => dispatch(incrementByOne())}>Increment By one</button><br/><br/>
            <button onClick={() => dispatch(decrementByOne())}>Decrement By one</button><br/><br/>
        </div>
    )
}

export default CounterComponentTwo