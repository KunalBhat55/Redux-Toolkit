// createSlice is a function that generates action, creates & reducers for slice of redux state

import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  value: 0,
};

// const array= [1,2,3,4,5,6,7,8,9,10];
// array.filter((item) => item > 5); // [6,7,8,9,10]
// array.reduce((acc, item) => acc + item, 2); 

export const counterSlice = createSlice({ 

    name: "Counter",
    initialState,
  
    reducers: { 
      increment: (state) => {
        
        state.value += 1 
      
      },
      decrement: (state) => {
        
        state.value -= 1 // 
      
      },
      incrementByAmount: (state, action) => {
        
        state.value += action.payload //  action.payload is the value passed in the action creator
      
      },
      reset: (state) => {
        
        state.value = 0;
      }
    },
})

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions // export actions 
export default counterSlice.reducer // export reducer that is used in store.js
