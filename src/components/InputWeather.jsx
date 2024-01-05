import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCityName } from "../features/WeatherInfo/weatherSlice";

function InputWeather() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center mt-3">
        <input
          className="border-2 border-gray-400 rounded-lg p-1 mx-1"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bg-green-500 rounded-lg p-1" onClick={() => dispatch(setCityName(city))}>Search</button>
      </div>
    </div>
  );
}
export default InputWeather;
