import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, addItem, fetchCartItems } from "./cartSlice"; // functions ghetoy
import { useEffect } from "react";

function Cart() {
  
  const { cartItems, amount, total } = useSelector((state) => state.cart); // values ghetoy

  const dispatch = useDispatch();

  const newItem = {

    id: 4,
    name: "Nokia 3310",
    price: 800,
    amount: 2
   
  }
  
  // useEffect(() => {
    
  //   dispatch(fetchCartItems());
  
  // }, []);

  if (amount < 1) {
    return <div className="text-2xl text-center">Cart is Empty!</div>;
  }

  return (
    <div className="text-xl text-center">
      <div className="m-2">
        <p>Amount: {amount}</p>
      </div>

      <div className="flex gap-1">
        {cartItems.map((item) => (  
          <div key={item.id}>
            <CartItem {...item} /> 
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center">
        <p className="">Summary</p>
        <button
          className="bg-red-400 p-1 hover:text-gray-200"
          onClick={() => {
            dispatch(clearCart())
          }}
        >
          Clear Cart
        </button>
        <button
          className="bg-red-400 p-1 m-1 hover:text-gray-200"
          onClick={() => dispatch(addItem(newItem))}
        >
          Add Magic!
        </button>
      </div>
      <footer className="">Total: ${total}</footer>
    </div>
  );
}
export default Cart;
