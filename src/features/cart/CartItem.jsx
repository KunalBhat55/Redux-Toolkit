import { useDispatch } from "react-redux";
import { removeItem, increaseAmount, decreaseAmount,  } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function CartItem({ id, name, price, amount }) {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="bg-gradient-to-r from-indigo-500 from-20%  to-emerald-300 to-70% p-2">
        <p className="">{name}</p>
        <p>{price}</p>
        <p>{amount}</p>
        {/* minus */}
        <button
          className="px-1 mx-2 hover:text-gray-200 border-2 border-gray-500"
          onClick={() => {
            if (amount == 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseAmount(id));
          }}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/minus.png"
            alt="minus"
          />
        </button>
        {/* remove */}
        <button
          className="px-1 hover:text-gray-200 border-2 border-gray-500"
          onClick={() => dispatch(removeItem(id))}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/50/multiply.png"
            alt="multiply"
          />
        </button>
        {/* plus */}
        <button
          className="px-1 mx-2 hover:text-gray-200 border-2 border-gray-500"
          onClick={() => {dispatch(increaseAmount(id))}}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/android/24/plus.png"
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
