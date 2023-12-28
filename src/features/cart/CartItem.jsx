import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function CartItem({id,  name, price, amount }) {
  
  const dispatch = useDispatch(); 
 
  return (
    <div>
        <h1 className="bg-gray-500">Product</h1>
        <p>{name}</p>
        <p>{price}</p>
        <p>{amount}</p>
        <button className="bg-red-400 px-1 hover:text-gray-200" onClick={() => dispatch(removeItem(id))} >X</button>
        <div></div>
    </div>
  )
}

export default CartItem