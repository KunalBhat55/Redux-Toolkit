import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartItems";


const initialState = {
   
  cartItems: cartItems,
  amount: 1 ,
  total: cartItems.length, 
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
    },
    addItem: (state, action) => {
      
      const item = action.payload;
      state.cartItems.push(item);
    
    },
    increaseAmount: (state, action) => {
      
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount++;
      state.total++;
    
    },
    decreaseAmount: (state, action) => {
      
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId); 

      item.amount--;
      state.total--;
    },
    calculateTotal: (state) => {

      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item)=>{
        
        amount += item.amount;
        total  += item.amount * item.price;

      }) 
      state.amount = amount;
      state.total = total;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }

})

export const { 
clearCart, 
removeItem, 
addItem, 
increaseAmount, 
decreaseAmount, 
calculateTotal 
} = cartSlice.actions
export default cartSlice.reducer;