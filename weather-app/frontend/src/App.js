import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './api/weatherApi';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (location) => {
    try {
      console.log('Fetching weather data for:', location); // Debugging
      const data = await fetchWeather(location);
      console.log('Weather data received:', data); // Debugging
      setWeather(data);
      setError('');
    } catch (err) {
      console.error('Error in handleSearch:', err); // Debugging
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;