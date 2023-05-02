import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    count: 0,
    input:""
}

export const CountSlice = createSlice({
    name: 'counter',
    initialState: initialValue,
    reducers: {
        incrementByOne: (state) => {
            state.count +=1
        },
        decrementByOne: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, action) => {
            state.count += action.payload  
        },
        decrementByValue: (state, action) => {
            state.count -= action.payload 
        },
        setInput: (state, action) => {
            state.input = action.payload
        }
    },
})

export const {incrementByOne, decrementByOne, incrementByValue, decrementByValue, setInput} = CountSlice.actions

export default CountSlice.reducer