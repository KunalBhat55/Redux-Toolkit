import Counter from "./features/counter/Counter";
import BackgroundChange from "./features/counter/BackgroundChange";
import WeatherInfo from "./features/WeatherInfo/WeatherInfo";
import Cart from "./features/cart/Cart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <BackgroundChange />  */}
        <Cart/>
        {/* <WeatherInfo /> */}
      </header>
    </div>
  );
}

export default App;
