// Whole state of the app in single store(setup redux store)
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import weatherReducer from "../features/WeatherInfo/weatherSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({

  reducer: { // why reducer? because we are reducing the whole state of the app into a single store
    
    counter: counterReducer, // counter is the name of the slice of state that we are using
    weather: weatherReducer,
    cart: cartReducer
    
  },
  

})
