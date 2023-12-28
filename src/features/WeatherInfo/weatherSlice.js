import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: 0,
  city: "",
};

  const city = "Pune";
  const appId = "6cef7429e966d71f34a9ef707b28e8f8";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
  
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        result = await response.json();
        // setData(result);
        console.log("Done!")
      } catch (error) {
        console.log("error", error);
      } finally {
        // setLoading(false);
      }
    };
    // eslint-disable-next-line no-unused-vars
    let result = fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps


export const weatherSlice = createSlice({
  name: "Weather",
  initialState,

  reducers: {

    getTemp: (state, action) => {

      state.temperature = action.payload

    },

  },

});

export const {getTemp} = weatherSlice.actions // export actions
export default weatherSlice.reducer // export reducer that is used in store.js