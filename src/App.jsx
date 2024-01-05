/* eslint-disable no-unused-vars */
import Counter from "./features/counter/Counter";
import BackgroundChange from "./features/counter/BackgroundChange";
import WeatherInfo from "./features/WeatherInfo/WeatherInfo";
import Cart from "./features/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import YourComponent from "./components/PopUp";
import InputWeather from "./components/InputWeather";

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  
  const dispatch = useDispatch();

  useEffect(()=>{
    
    dispatch(calculateTotal()); // calculateTotal when cartItems changes
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />  */}
        {/* <BackgroundChange />  */}
        {/* <Cart/> */}
        <InputWeather />
        <WeatherInfo />
        <YourComponent />
      </header>
    </div>
  );
}

export default App;
