import { Oval } from "react-loader-spinner";
import { useEffect } from "react";
import { fetchWeather } from "./weatherSlice";
import { useDispatch, useSelector } from "react-redux";

function WeatherInfo() {
  const dispatch = useDispatch();
  
  const {
    temperature,
    city,
    isLoading,
    min_temp,
    max_temp,
    wind,
    description,
    humidity,
  } = useSelector((state) => state.weather);

  // Redux-Toolkit implementation
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city]);

  return (
    <div className="weather-div">
      <div className="text-2xl text-center text-white">
        {/* Redux-Toolkit Practice */}
      </div>
      <div className="text-gray-800 text-center">
        {isLoading ? (
          <div className="flex justify-center mt-12">
            <Oval
              color="#242424"
              secondaryColor="#242424"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div className="my-10">
            <div className="text-3xl">
              {temperature ? (
                <div>
                  <h1 className="text-500">Weather of {city} </h1>
                  <p className="m-1 text-7xl leading-22">
                    {temperature} <sup>o</sup>C
                  </p>
                  <p className="m-3 text-4xl inline-block">Max {max_temp}</p>
                  <p className="m-3 text-4xl inline-block">Min {min_temp}</p>
                  <p className="m-3 text-4xl inline-block">
                    Humidity {humidity}
                  </p>
                  <p className="m-3 text-4xl inline-block">Wind {wind} m/s</p>
                  <p className="m-3 text-4xl">{description}</p>
                </div>
              ) : (
                "No Data Found for this city"
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherInfo;
