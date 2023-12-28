import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

function WeatherInfo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const dispatch = useDispatch();
  // const weatherData = useSelector((state) => state.weather.tempearture);

  // dispatching the action to get the data from the API

  const city = "London";
  const appId = "6cef7429e966d71f34a9ef707b28e8f8";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log("Done!")
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weather-div">
      <div className="text-2xl text-center text-white">
        {/* Redux-Toolkit Practice */}
      </div>
      <div className="text-gray-800 text-center">
        {loading ? (
          // <p className="text-4xl mt-5">{Audio}</p>
          <div className="flex justify-center mt-12">
            <Oval color="#242424" secondaryColor="#242424" height={50} width={50} />
          </div>
        ) : (
          <div className="my-10">
            <div className="text-3xl">
              {data.cod != 404 && data.cod != 400 ? (
                <div>
                  <h1 className="text-500">Weather of {data.name} </h1>
                  <p className="m-1 text-7xl leading-22">
                    {data.main.temp} <sup>o</sup>C
                  </p>
                  <p className="m-3 text-4xl inline-block">
                    Max {data.main.temp_max}
                  </p>
                  <p className="m-3 text-4xl inline-block">
                    Min {data.main.temp_min}
                  </p>
                  <p className="m-3 text-4xl inline-block">
                    Humidity {data.main.humidity}
                  </p>
                  <p className="m-3 text-4xl inline-block">
                    Wind {data.wind.speed * 3.6} km/h
                  </p>
                  <p className="m-3 text-4xl">{data.weather[0].description}</p>
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
