import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import cartReducer from "./cartSlice"
import { clearCart } from "./cartSlice";


function Cart() {
  const { cartItems, amount, total } = useSelector((state) => state.cart); // values ghetoy
  const dispatch = useDispatch();

  if(amount < 1){
    return (
       <div className="text-2xl text-center">Cart is Empty!</div>
    )
  }

  return (
    <div className="text-2xl text-center">
      <div className="m-3">
        <p>Amount: {amount}</p>
      </div>
      <div>
        {cartItems.map((item) => (
            
            <div key={item.id}>
                <CartItem {...item} />
            </div>
            
        ))}
        <p className="mt-8">Summary</p>
      </div>
      <button className="bg-red-400 p-1 hover:text-gray-200" onClick={() => dispatch(clearCart())}>Clear Cart</button>     
      <footer className="">Total: {total}</footer>               
    </div> 
  );
}   

export default Cart;
