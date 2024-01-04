import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const city = "London";
const appId = "6cef7429e966d71f34a9ef707b28e8f8";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;

export const fetchWeather = createAsyncThunk("get/weatherInfo", async () => { // async action creator
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }
})


const initialState = {
  temperature: 0,
  min_temp: 0,
  max_temp: 0,
  humidity: 0,
  wind: 0,
  description: "",
  city: "",
  isLoading: true,
  error: null
};


const weatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {},
  extraReducers: (weatherCondition) => {
    
    weatherCondition
    .addCase(fetchWeather.fulfilled, (state, action) => {
      
      state.temperature = action.payload.main.temp;
      state.city = action.payload.name;
      state.min_temp = action.payload.main.temp_min;
      state.max_temp = action.payload.main.temp_max;
      state.humidity = action.payload.main.humidity;
      state.wind = action.payload.wind.speed;
      state.description = action.payload.weather[0].description;
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

export const {getTemp} = weatherSlice.actions // export actions
export default weatherSlice.reducer // export reducer that is used in store.js