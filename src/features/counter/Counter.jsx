import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
// read data from the store with (useSelector)
// dispatch actions using (useDispatch)

function Counter() {

  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  return (  
    <div className="flex justify-center my-20">
      <div>
        <button className="text-2xl m-4 p-2 bg-green-600" onClick={() => dispatch(increment())}> 
          Increment+
        </button>
      </div>
      <span className="text-2xl">{count}</span>
      <div>
        <button className="text-2xl m-4 p-2 bg-green-600" onClick={() => dispatch(decrement())}>
          Decrement-
        </button>
      </div><br />
      <button className="text-2xl m-4 p-2 bg-green-600" onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Counter;
