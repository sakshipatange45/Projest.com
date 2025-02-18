import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const temperature = main.temp;
  const weatherCondition = weather[0].main;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-icon">
        <WeatherIcon weather={weatherCondition} />
      </div>
      <p className="temperature">{temperature}°C</p>
      <p className="weather-condition">{weatherCondition}</p>
      <div className="weather-details">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;