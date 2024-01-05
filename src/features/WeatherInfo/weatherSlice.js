import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 

const appId = import.meta.env.VITE_WEATHER_APP_ID;

const initialState = {
  temperature: 0,
  min_temp: 0,
  max_temp: 0,
  humidity: 0,
  wind: 0,
  description: "",
  city: "",
  isLoading: true,
  error: null,
}

export const fetchWeather = createAsyncThunk("get/weatherInfo", async (city) => { // async action creator
  
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }
})


const weatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
     
    setCityName: (state, action) => {
        
      state.city = action.payload;

    },
  },
    
  extraReducers: (weatherCondition) => {

    weatherCondition
    .addCase(fetchWeather.fulfilled, (state, action) => {
      
      if(action.payload.cod === 200) {
        state.temperature = action.payload.main.temp;
        state.min_temp = action.payload.main.temp_min;
        state.max_temp = action.payload.main.temp_max;
        state.humidity = action.payload.main.humidity;
        state.wind = action.payload.wind.speed;
        state.description = action.payload.weather[0].description;
        state.city = action.payload.name;
        state.error = null;
      }
      state.isLoading = false;

    
    })
    .addCase(fetchWeather.pending, (state) => {
      
      state.isLoading = true
    
    })
    .addCase(fetchWeather.rejected, (state, action) => {
     
      state.isLoading = false;
      state.error = action.error.message 
    
    })
  
  }
});

export const {setCityName} = weatherSlice.actions // export actions
export default weatherSlice.reducer // export reducer that is used in store.js