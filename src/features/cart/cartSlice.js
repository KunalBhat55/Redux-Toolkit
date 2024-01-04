import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "./cartItems";


const url = "https://course-api.com/react-useReducer-cart-project";

export const fetchCartItems = createAsyncThunk("get/cartItems", async () => {
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }
 
})

const initialState = {
   
  cartItems: cartItems,
  amount: 1 ,
  total: cartItems.length, 
  isLoading: true,
  error: null

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
        total  += item.amount * item.price; // calulate single item total and add to total

      }) 
      state.amount = amount;
      state.total = total;
    },
  },

  extraReducers: (builder) => { // this is where we handle the fetchCartItems async thunk

    builder  // builder is an object that contains methods that add cases to the reducer
    .addCase(fetchCartItems.pending, (state) => { 
      
      state.isLoading = true;
    })
    .addCase(fetchCartItems.fulfilled, (state, action) => {
      
      console.log(action.payload)
      state.isLoading = false;
      state.cartItems = action.payload;

    })
    .addCase(fetchCartItems.rejected, (state, action) => {
      
      state.isLoading = false;
      state.error = action.error.message;
    })
  
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