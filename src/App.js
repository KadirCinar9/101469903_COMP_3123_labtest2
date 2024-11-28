import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const API_KEY = "9c6650cd4a1b3b182b5852007c9d1bf4";

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="App">
      <SearchBar setCity={setCity} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
