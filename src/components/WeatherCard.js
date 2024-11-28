import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2 className="weather-city">{name}</h2>
      <img src={iconUrl} alt={weatherInfo[0].description} className="weather-icon" />
      <div className="weather-details">
        <p className="weather-temp">{Math.round(main.temp)}°C</p>
        <p className="weather-condition">{weatherInfo[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
