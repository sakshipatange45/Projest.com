import React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt } from 'react-icons/fa';

const WeatherIcon = ({ weather }) => {
  const iconSize = 50; // Adjust icon size

  switch (weather) {
    case 'Clear':
      return <FaSun size={iconSize} />;
    case 'Clouds':
      return <FaCloud size={iconSize} />;
    case 'Rain':
      return <FaCloudRain size={iconSize} />;
    case 'Snow':
      return <FaSnowflake size={iconSize} />;
    case 'Thunderstorm':
      return <FaBolt size={iconSize} />;
    default:
      return <FaSun size={iconSize} />;
  }
};

export default WeatherIcon;