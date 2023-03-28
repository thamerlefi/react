import { createSlice } from "@reduxjs/toolkit";

const count =createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment : (state,action)=>{
            return state + action.payload
        },
        decrement: (state,action)=>{
            return state - action.payload
        }
    }
})

export const {increment, decrement} = count.actions;
export default count.reducer