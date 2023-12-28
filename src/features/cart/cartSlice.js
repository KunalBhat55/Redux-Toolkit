import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartItems";


const initialState = {
   
    cartItems: cartItems,
    amount: 1,
    total: 0, 
    isLoading: true

}

const cartSlice = createSlice({
  
    name: "cart", 
    initialState,

    reducers: {   // reducers are action creators that return an action object with a type property and a payload property
    
      clearCart: (state) => {
        
        state.cartItems = [];
    
      },
      removeItem: (state, action) => {
        
        const itemId = action.payload; // payload contains the id of the item to be removed
        state.cartItems = state.cartItems.filter((item) => item.id != itemId);
      }

    }

})

export const {clearCart, removeItem} = cartSlice.actions
export default cartSlice.reducer;