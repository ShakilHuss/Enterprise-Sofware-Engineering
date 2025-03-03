import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <div>No weather data available</div>;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;