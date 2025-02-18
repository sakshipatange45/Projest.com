import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';
import SearchBar from './Components/SearchBar';
import LoadingSpinner from './Components/LoadingSpinner';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Retrieve API key from environment variables
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchWeatherData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      localStorage.setItem('lastCity', city); // Save last searched city
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      setCity(lastCity);
    }
    fetchWeatherData();
  }, []);

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData();
    }
  };

  return (
    <div className={`App ${weatherData ? weatherData.weather[0].main.toLowerCase() : ''}`}>
      <h1>Weather Application</h1>
      <SearchBar value={city} onChange={setCity} onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <p className="error">{error}</p>}
      {weatherData && !loading && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
